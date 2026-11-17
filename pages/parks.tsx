import {useState} from 'react';
import type {GetStaticProps, NextPage} from 'next';
import Head from 'next/head';
import {geoAlbersUsa, geoPath} from 'd3-geo';
import {feature, mesh} from 'topojson-client';
import type {Topology, GeometryCollection} from 'topojson-specification';
import usAtlas from 'us-atlas/states-albers-10m.json';

import ParkBadge, {type Motif} from '../components/ParkBadge';
import parksData from '../components/data/nationalParks.json';

interface Park {
	code: string;
	name: string;
	state: string;
	motif: Motif;
	visited: boolean;
	// Position on the 975×610 map, or null for parks outside the projection (territories).
	x: number | null;
	y: number | null;
}

interface StatePath {
	name: string;
	d: string;
	visited: boolean;
}

interface Props {
	states: StatePath[];
	borders: string;
	parks: Park[];
}

const stateNames: Record<string, string> = {
	AK: 'Alaska', AR: 'Arkansas', AZ: 'Arizona', CA: 'California', CO: 'Colorado', FL: 'Florida',
	HI: 'Hawaii', IN: 'Indiana', KY: 'Kentucky', ME: 'Maine', MI: 'Michigan', MN: 'Minnesota',
	MO: 'Missouri', MT: 'Montana', ND: 'North Dakota', NM: 'New Mexico', NV: 'Nevada', OH: 'Ohio',
	OR: 'Oregon', SC: 'South Carolina', SD: 'South Dakota', TN: 'Tennessee', TX: 'Texas', UT: 'Utah',
	VA: 'Virginia', WA: 'Washington', WV: 'West Virginia', WY: 'Wyoming',
};

const MAP_W = 975;
const MAP_H = 610;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const topo = usAtlas as unknown as Topology<{states: GeometryCollection<{name: string}>}>;
	// The us-atlas "albers" files are already projected to 975×610, so paths need no projection.
	const path = geoPath().digits(1);
	// Matches the projection us-atlas used, so park points line up with the states.
	const projection = geoAlbersUsa().scale(1300).translate([MAP_W / 2, MAP_H / 2]);

	const visitedStates = new Set(parksData.filter(p => p.visited).map(p => stateNames[p.state]));

	const states = feature(topo, topo.objects.states).features.map(f => ({
		name: f.properties.name,
		d: path(f) ?? '',
		visited: visitedStates.has(f.properties.name),
	}));
	const borders = path(mesh(topo, topo.objects.states, (a, b) => a !== b)) ?? '';

	const parks: Park[] = parksData.map(p => {
		const point = projection([p.lon, p.lat]);
		return {
			code: p.code,
			name: p.name,
			state: p.state,
			motif: p.motif as Motif,
			visited: p.visited,
			x: point ? Math.round(point[0] * 10) / 10 : null,
			y: point ? Math.round(point[1] * 10) / 10 : null,
		};
	});

	return {props: {states, borders, parks}};
};

const BADGE = 28;
const GOAL = 30;
const FAVORITE = 'NOCA'; // North Cascades

const Parks: NextPage<Props> = ({states, borders, parks}) => {
	const [active, setActive] = useState<string | null>(null);

	const visited = parks.filter(p => p.visited);
	const remaining = parks.filter(p => !p.visited);
	const favorite = parks.find(p => p.code === FAVORITE);
	const onMap = parks.filter(p => p.x !== null);
	const offMap = parks.filter(p => p.x === null);
	// Draw unvisited dots first, then badges, with the hovered badge last so it sits on top.
	const ordered = [...onMap].sort((a, b) =>
		Number(a.visited) - Number(b.visited) || Number(a.code === active) - Number(b.code === active));
	const activePark = onMap.find(p => p.code === active);

	return (
		<>
			<Head>
				<title>National Parks</title>
			</Head>
			<div className='max-w-4xl mx-auto px-5 pb-16'>
				<h1 className='text-3xl font-bold tracking-tight'>National Parks</h1>
				<p className='mt-2 text-neutral-600 dark:text-neutral-400'>
					I've visited <span className='font-semibold text-emerald-700 dark:text-emerald-400'>{visited.length}</span> of
					the {parks.length} US national parks.
				</p>
				<p className='mt-1 text-neutral-600 dark:text-neutral-400'>
					Visiting {GOAL} national parks is my top <span className='font-semibold'>30 under 30</span> goal.
				</p>
				<div className='mt-2 flex items-center gap-3 max-w-xs'>
					<div className='h-2 flex-1 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden'>
						<div className='h-full rounded-full bg-emerald-500' style={{width: `${Math.min(100, (visited.length / GOAL) * 100)}%`}}/>
					</div>
					<span className='text-xs font-semibold text-neutral-500'>{visited.length} / {GOAL}</span>
				</div>
				{favorite && (
					<p className='mt-3 text-neutral-600 dark:text-neutral-400'>
						My favorite national park so far: <span className='font-semibold text-neutral-900 dark:text-neutral-100'>{favorite.name}</span> ⭐
					</p>
				)}

				<div className='relative mt-6'>
					<svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className='w-full h-auto' role='img' aria-label='Map of US national parks I have visited'>
						{states.map(s => (
							<path
								key={s.name}
								d={s.d}
								className={s.visited
									? 'fill-emerald-100 dark:fill-emerald-950'
									: 'fill-neutral-100 dark:fill-neutral-800'}/>
						))}
						<path d={borders} fill='none' strokeWidth={0.8} strokeLinejoin='round' className='stroke-white dark:stroke-neutral-900'/>

						{ordered.map(p => p.visited ? (
							<g
								key={p.code}
								transform={`translate(${p.x! - BADGE / 2} ${p.y! - BADGE / 2})`}
								className='cursor-pointer'
								tabIndex={0}
								aria-label={`${p.name} National Park`}
								onMouseEnter={() => {
									setActive(p.code);
								}}
								onMouseLeave={() => {
									setActive(null);
								}}
								onFocus={() => {
									setActive(p.code);
								}}
								onBlur={() => {
									setActive(null);
								}}>
								<g style={{transform: active === p.code ? 'scale(1.5)' : 'none', transformOrigin: `${BADGE / 2}px ${BADGE / 2}px`, transition: 'transform 150ms'}}>
									<ParkBadge motif={p.motif} code={p.code} size={BADGE}/>
								</g>
							</g>
						) : (
							<circle
								key={p.code}
								cx={p.x!}
								cy={p.y!}
								r={active === p.code ? 6 : 4}
								className='fill-neutral-400 dark:fill-neutral-500 stroke-white dark:stroke-neutral-900 cursor-pointer'
								strokeWidth={1.5}
								onMouseEnter={() => {
									setActive(p.code);
								}}
								onMouseLeave={() => {
									setActive(null);
								}}>
								<title>{p.name}</title>
							</circle>
						))}
					</svg>

					{activePark && (
						<div
							className='pointer-events-none absolute -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white'
							style={{
								left: `${(activePark.x! / MAP_W) * 100}%`,
								top: `calc(${(activePark.y! / MAP_H) * 100}% - ${activePark.visited ? 26 : 10}px)`,
							}}>
							{activePark.name}
							{!activePark.visited && <span className='text-neutral-300'> · not yet</span>}
						</div>
					)}
				</div>

				{offMap.length > 0 && (
					<p className='mt-2 text-xs text-neutral-500'>
						Not shown on the map: {offMap.map(p => `${p.name}${p.visited ? ' ✓' : ''}`).join(', ')}.
					</p>
				)}

				<h2 className='mt-12 text-xl font-bold'>Visited</h2>
				<ul className='mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6'>
					{visited.map(p => (
						<li key={p.code} className='flex flex-col items-center text-center'>
							<ParkBadge motif={p.motif} code={p.code} size={88}/>
							<span className='mt-2 text-sm font-semibold leading-tight'>{p.name}</span>
							<span className='text-xs text-neutral-500'>{p.state}</span>
							{p.code === FAVORITE && (
								<span className='mt-1 rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-800 dark:bg-amber-900 dark:text-amber-200'>★ Favorite</span>
							)}
						</li>
					))}
				</ul>

				<h2 className='mt-12 text-xl font-bold'>Still to explore</h2>
				<ul className='mt-4 grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-3'>
					{remaining.map(p => (
						<li key={p.code} title={p.name} className='flex flex-col items-center text-center'>
							<ParkBadge muted motif={p.motif} code={p.code} size={44}/>
							<span className='mt-1 text-[10px] leading-tight text-neutral-500'>{p.name}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default Parks;
