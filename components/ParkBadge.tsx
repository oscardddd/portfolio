import {useId} from 'react';

export type Motif =
	| 'peaks' | 'arch' | 'canyon' | 'hoodoos' | 'badlands' | 'desert' | 'dunes'
	| 'volcano' | 'geyser' | 'glacier' | 'lake' | 'forest' | 'sequoia' | 'swamp'
	| 'coast' | 'island' | 'cave' | 'waterfall' | 'dome' | 'gatewayarch' | 'bridge'
	| 'cliffdwelling';

interface Palette {
	sky: [string, string];
	ring: string;
	a: string; // Primary landform
	b: string; // Secondary landform / shade
	c: string; // Accent
}

const palettes: Record<Motif, Palette> = {
	peaks: {sky: ['#8ec5e8', '#e3f1f9'], ring: '#2f4b6e', a: '#4b6584', b: '#2f4b6e', c: '#ffffff'},
	arch: {sky: ['#f6b26b', '#fde3c3'], ring: '#8c3b1e', a: '#c4572b', b: '#8c3b1e', c: '#e9a15d'},
	canyon: {sky: ['#f8c471', '#fdebd0'], ring: '#7b341e', a: '#c0602f', b: '#9c4321', c: '#4fa3c7'},
	hoodoos: {sky: ['#f5b7a1', '#fde8dc'], ring: '#a04a28', a: '#e07b4c', b: '#b8562f', c: '#f6e3c6'},
	badlands: {sky: ['#a9cce3', '#eaf4fa'], ring: '#7d5a44', a: '#c9a27e', b: '#a0765a', c: '#e8d3b9'},
	desert: {sky: ['#f9d77e', '#fef4d6'], ring: '#6b4f2a', a: '#d8a35d', b: '#3f7d4e', c: '#b9824a'},
	dunes: {sky: ['#a8d8f0', '#eef8fd'], ring: '#a68a5b', a: '#f1dcb2', b: '#d6b97f', c: '#fff6e0'},
	volcano: {sky: ['#3d3b5c', '#a35d6a'], ring: '#2a2233', a: '#463a3f', b: '#2b2328', c: '#ff7a2f'},
	geyser: {sky: ['#7fb8d8', '#d9edf6'], ring: '#3b6b56', a: '#6b8f5e', b: '#c7b38a', c: '#ffffff'},
	glacier: {sky: ['#9fd3ea', '#effafe'], ring: '#24597a', a: '#4f7491', b: '#dff3fb', c: '#3c8dbc'},
	lake: {sky: ['#7eb6e3', '#dbeefa'], ring: '#1f4f7a', a: '#3d6e4a', b: '#1f6aa5', c: '#7b6a58'},
	forest: {sky: ['#a7c7e7', '#e8f1f8'], ring: '#24533a', a: '#2f6b47', b: '#5b8f6a', c: '#7fa7c9'},
	sequoia: {sky: ['#b5d6a7', '#eef6e9'], ring: '#5a2e1c', a: '#8b4a2b', b: '#2f6b3f', c: '#4d8a5a'},
	swamp: {sky: ['#c9e3c2', '#f3f9f0'], ring: '#3c5a3a', a: '#4f6b4a', b: '#6a9a8f', c: '#38523a'},
	coast: {sky: ['#9ccbe8', '#eaf5fb'], ring: '#2b4f6b', a: '#6d6a68', b: '#2d6d9a', c: '#d64545'},
	island: {sky: ['#7fd3e6', '#e6f9fc'], ring: '#137a8a', a: '#f3e1b0', b: '#1ca3b8', c: '#2f8a4a'},
	cave: {sky: ['#d9c4a5', '#efe2cd'], ring: '#4a3627', a: '#8a6a4f', b: '#2b1f17', c: '#c9a87c'},
	waterfall: {sky: ['#a9d4ef', '#e9f5fc'], ring: '#2e5a46', a: '#5e7f5a', b: '#3d5c42', c: '#d8eff9'},
	dome: {sky: ['#f4c28f', '#fdeedd'], ring: '#3d4a5c', a: '#8a929e', b: '#2f6b47', c: '#5e6773'},
	gatewayarch: {sky: ['#9fc4e8', '#eaf2fb'], ring: '#3a4a5a', a: '#c8d0d8', b: '#5a6a7a', c: '#2f6b9a'},
	bridge: {sky: ['#f2b880', '#fde9d6'], ring: '#3c5a3a', a: '#4a6e48', b: '#a54c2b', c: '#5aa3c7'},
	cliffdwelling: {sky: ['#f7c88a', '#fdeedb'], ring: '#7a4a28', a: '#c48a55', b: '#9a6338', c: '#5a3a22'},
};

const pine = (x: number, y: number, h: number) =>
	`M${x} ${y - h} L${x + h * 0.32} ${y} L${x - h * 0.32} ${y} Z`;

const shapes: Record<Motif, (p: Palette) => JSX.Element> = {
	peaks: p => (
		<>
			<path d='M-5 80 L28 38 L48 62 L66 30 L105 80 Z' fill={p.a}/>
			<path d='M66 30 L76 43 L70 41 L64 46 L58 40 Z M28 38 L35 47 L29 45 L23 49 Z' fill={p.c}/>
			<path d='M-5 100 L-5 72 Q30 64 55 74 T105 70 L105 100 Z' fill={p.b}/>
		</>
	),
	arch: p => (
		<>
			<path d='M18 82 L22 44 Q50 18 78 44 L82 82 L66 82 L64 54 Q50 40 36 54 L34 82 Z' fill={p.a}/>
			<path d='M36 54 Q50 40 64 54 L64 58 Q50 46 36 58 Z' fill={p.b}/>
			<path d='M-5 100 L-5 80 L105 80 L105 100 Z' fill={p.c}/>
		</>
	),
	canyon: p => (
		<>
			<path d='M-5 46 L105 46 L105 100 L-5 100 Z' fill={p.a} opacity='0.45'/>
			<path d='M20 56 L80 56 M26 64 L74 64' stroke={p.b} strokeWidth='2' opacity='0.35'/>
			<path d='M-5 38 L30 38 L32 50 L40 52 L42 66 L46 100 L-5 100 Z' fill={p.a}/>
			<path d='M105 42 L72 42 L68 54 L60 56 L58 70 L54 100 L105 100 Z' fill={p.b}/>
			<path d='M-5 48 L30 48 M-5 60 L38 60 M105 52 L70 52 M105 64 L60 64' stroke={p.b} strokeWidth='2' opacity='0.5'/>
			<path d='M44 100 Q50 82 47 72 L56 72 Q54 84 58 100 Z' fill={p.c}/>
		</>
	),
	hoodoos: p => (
		<>
			{[14, 30, 46, 62, 78].map((x, i) => {
				const top = [46, 34, 42, 30, 44][i];
				return <path key={x} d={`M${x - 6} 84 L${x - 5} ${top + 8} Q${x} ${top - 4} ${x + 5} ${top + 8} L${x + 6} 84 Z`} fill={i % 2 ? p.a : p.b}/>;
			})}
			<path d='M-5 100 L-5 80 L105 80 L105 100 Z' fill={p.c}/>
		</>
	),
	badlands: p => (
		<>
			<path d='M-5 82 L8 56 L22 64 L38 44 L54 60 L70 46 L86 62 L105 52 L105 100 L-5 100 Z' fill={p.a}/>
			<path d='M2 66 L22 68 L36 54 L54 66 L70 56 L88 68 L105 62' stroke={p.b} strokeWidth='3' fill='none'/>
			<path d='M-2 76 L30 76 L46 68 L70 70 L105 72' stroke={p.c} strokeWidth='3' fill='none'/>
			<path d='M-5 100 L-5 84 Q50 78 105 84 L105 100 Z' fill={p.b}/>
		</>
	),
	desert: p => (
		<>
			<path d='M50 62 L58 48 L92 48 L100 62 Z' fill={p.c}/>
			<path d='M-5 100 L-5 64 Q50 56 105 64 L105 100 Z' fill={p.a}/>
			<path d='M30 84 L30 36 Q34 31 38 36 L38 84 Z M30 62 L22 62 Q18 62 18 56 L18 46 Q21 42 24 46 L24 56 L30 56 Z M38 54 L44 54 L44 44 Q47 40 50 44 L50 56 Q50 60 46 60 L38 60 Z' fill={p.b}/>
		</>
	),
	dunes: p => (
		<>
			<path d='M-5 70 Q20 48 46 64 Q70 46 105 62 L105 100 L-5 100 Z' fill={p.b}/>
			<path d='M-5 84 Q30 62 60 78 Q82 66 105 76 L105 100 L-5 100 Z' fill={p.a}/>
			<path d='M20 56 Q32 58 46 64 M60 74 Q50 70 40 70' stroke={p.c} strokeWidth='1.5' fill='none'/>
		</>
	),
	volcano: p => (
		<>
			<path d='M46 28 Q40 18 48 12 Q56 8 58 16 Q66 14 64 24' fill='#ffffff' opacity='0.35'/>
			<path d='M-5 90 L36 38 L44 42 L56 42 L64 38 L105 90 Z' fill={p.a}/>
			<path d='M44 42 L48 56 L44 70 L50 90 L56 90 L52 70 L57 54 L56 42 Z' fill={p.c}/>
			<path d='M-5 100 L-5 86 L105 86 L105 100 Z' fill={p.b}/>
		</>
	),
	geyser: p => (
		<>
			<path d='M-5 70 L20 56 L40 66 L70 52 L105 66 L105 100 L-5 100 Z' fill={p.a}/>
			<path d='M46 80 Q42 50 46 20 Q50 12 54 20 Q58 50 54 80 Z' fill={p.c}/>
			<circle cx='42' cy='24' r='8' fill={p.c} opacity='0.8'/>
			<circle cx='58' cy='20' r='9' fill={p.c} opacity='0.8'/>
			<path d='M-5 100 L-5 80 Q50 72 105 80 L105 100 Z' fill={p.b}/>
		</>
	),
	glacier: p => (
		<>
			<path d='M-5 74 L24 34 L44 56 L64 26 L105 74 Z' fill={p.a}/>
			<path d='M24 34 L44 56 L56 38 L64 26 L76 42 L60 64 L50 74 L30 74 L32 50 Z' fill={p.b}/>
			<path d='M-5 100 L-5 72 L105 72 L105 100 Z' fill={p.c}/>
			<path d='M10 82 L30 82 M60 88 L84 88' stroke='#ffffff' strokeWidth='1.5' opacity='0.6'/>
		</>
	),
	lake: p => (
		<>
			<path d='M-5 60 L18 46 L34 54 L50 42 L68 52 L84 44 L105 58 L105 100 L-5 100 Z' fill={p.c}/>
			<path d='M2 100 Q4 66 50 64 Q96 66 98 100 Z' fill={p.b}/>
			<path d='M28 78 Q30 70 38 70 Q44 70 46 78 Z' fill={p.a}/>
			<path d='M58 80 L74 80 M20 90 L34 90' stroke='#ffffff' strokeWidth='1.5' opacity='0.6'/>
		</>
	),
	forest: p => (
		<>
			<path d='M-5 60 Q25 40 50 52 Q75 38 105 54 L105 100 L-5 100 Z' fill={p.c} opacity='0.7'/>
			{[10, 26, 42, 58, 74, 90].map((x, i) => <path key={x} d={pine(x, 76, 28 + (i % 3) * 6)} fill={p.b}/>)}
			{[18, 34, 50, 66, 82].map((x, i) => <path key={x} d={pine(x, 90, 30 + (i % 2) * 8)} fill={p.a}/>)}
			<path d='M-5 100 L-5 88 L105 88 L105 100 Z' fill={p.a}/>
		</>
	),
	sequoia: p => (
		<>
			<path d='M-5 40 Q20 24 50 30 Q80 22 105 38 L105 54 L-5 54 Z' fill={p.b}/>
			<path d='M22 100 L26 34 L36 34 L40 100 Z M58 100 L62 26 L74 26 L78 100 Z' fill={p.a}/>
			<path d='M30 40 L30 96 M68 34 L68 96' stroke='#5a2e1c' strokeWidth='1.5' opacity='0.5'/>
			<path d='M-5 100 L-5 86 L105 86 L105 100 Z' fill={p.c}/>
		</>
	),
	swamp: p => (
		<>
			<path d='M-5 100 L-5 74 L105 74 L105 100 Z' fill={p.b}/>
			{[24, 62, 84].map((x, i) => (
				<g key={x}>
					<path d={`M${x - 6} 78 L${x - 2} 40 L${x + 2} 40 L${x + 6} 78 Z`} fill={p.c}/>
					<ellipse cx={x} cy={36 - i * 2} rx='14' ry='8' fill={p.a}/>
				</g>
			))}
			<path d='M10 86 L30 86 M50 92 L76 92' stroke='#ffffff' strokeWidth='1.5' opacity='0.5'/>
		</>
	),
	coast: p => (
		<>
			<path d='M-5 100 L-5 66 L105 66 L105 100 Z' fill={p.b}/>
			<path d='M-5 100 L-5 50 L20 46 L38 56 L48 72 L56 100 Z' fill={p.a}/>
			<path d='M22 46 L23 26 L29 26 L30 46 Z' fill='#ffffff'/>
			<path d='M22 32 L30 32 L30 36 L22 36 Z' fill={p.c}/>
			<path d='M21 26 L26 20 L31 26 Z' fill={p.c}/>
			<path d='M64 78 Q72 74 80 78 M76 88 Q84 84 92 88' stroke='#ffffff' strokeWidth='1.5' fill='none'/>
		</>
	),
	island: p => (
		<>
			<path d='M-5 100 L-5 70 L105 70 L105 100 Z' fill={p.b}/>
			<path d='M24 74 Q50 58 80 74 Z' fill={p.a}/>
			<path d='M52 66 Q54 48 50 34' stroke='#7a5a3a' strokeWidth='3' fill='none'/>
			<path d='M50 34 Q36 30 30 40 Q40 34 50 36 Q46 24 36 22 Q48 24 51 34 Q58 22 68 24 Q58 28 52 35 Q64 32 70 42 Q60 34 50 36 Z' fill={p.c}/>
		</>
	),
	cave: p => (
		<>
			<path d='M-5 -5 L105 -5 L105 100 L-5 100 Z' fill={p.a}/>
			<path d='M14 100 L14 60 Q16 26 50 24 Q84 26 86 60 L86 100 Z' fill={p.b}/>
			<path d='M30 30 L33 44 L36 30 Z M46 25 L50 46 L54 25 Z M64 28 L67 40 L70 29 Z' fill={p.a}/>
			<path d='M26 100 L30 82 L34 100 Z M60 100 L66 76 L72 100 Z' fill={p.c}/>
		</>
	),
	waterfall: p => (
		<>
			<path d='M-5 34 L40 34 L40 100 L-5 100 Z M60 30 L105 30 L105 100 L60 100 Z' fill={p.a}/>
			<path d='M40 34 L60 30 L60 100 L40 100 Z' fill={p.c}/>
			<path d='M46 40 L46 76 M54 38 L54 80' stroke='#ffffff' strokeWidth='1.5'/>
			<path d='M-5 100 L-5 82 Q50 74 105 82 L105 100 Z' fill={p.b}/>
			<ellipse cx='50' cy='82' rx='16' ry='4' fill='#ffffff' opacity='0.7'/>
		</>
	),
	dome: p => (
		<>
			<path d='M18 84 L22 54 Q30 26 60 24 L62 84 Z' fill={p.a}/>
			<path d='M60 24 L62 84 L56 84 L54 30 Z' fill={p.c}/>
			<path d='M-5 100 L-5 78 L105 78 L105 100 Z' fill={p.b}/>
			{[70, 82, 94].map(x => <path key={x} d={pine(x, 82, 18)} fill={p.b}/>)}
		</>
	),
	gatewayarch: p => (
		<>
			<path d='M18 86 Q50 -30 82 86 L76 86 Q50 -14 24 86 Z' fill={p.a}/>
			<path d='M50 14 Q66 18 82 86 L79 86 Q66 24 50 18 Z' fill={p.b} opacity='0.5'/>
			<path d='M-5 100 L-5 84 L105 84 L105 100 Z' fill={p.c}/>
		</>
	),
	bridge: p => (
		<>
			<path d='M-5 40 L22 46 L36 100 L-5 100 Z M105 40 L78 46 L64 100 L105 100 Z' fill={p.a}/>
			<path d='M-5 40 L105 40 L105 44 L-5 44 Z' fill={p.b}/>
			<path d='M24 44 Q50 92 76 44' stroke={p.b} strokeWidth='3' fill='none'/>
			{[34, 42, 50, 58, 66].map(x => <path key={x} d={`M${x} 44 L${x} ${44 + 22 - Math.abs(50 - x) * 0.6}`} stroke={p.b} strokeWidth='1.5'/>)}
			<path d='M36 100 Q50 86 64 100 Z' fill={p.c}/>
		</>
	),
	cliffdwelling: p => (
		<>
			<path d='M-5 20 L105 20 L105 36 Q50 44 -5 36 Z' fill={p.b}/>
			<path d='M-5 36 Q50 44 105 36 L105 50 Q50 34 -5 50 Z' fill={p.c}/>
			<path d='M18 60 L18 46 L34 46 L34 60 Z M38 60 L38 40 L48 36 L58 40 L58 60 Z M62 60 L62 46 L80 46 L80 60 Z' fill={p.a}/>
			<path d='M24 52 L28 52 L28 60 L24 60 Z M46 46 L50 46 L50 52 L46 52 Z M68 52 L72 52 L72 60 L68 60 Z' fill={p.c}/>
			<path d='M-5 100 L-5 58 L105 58 L105 100 Z' fill={p.b}/>
		</>
	),
};

interface Props {
	motif: Motif;
	code: string;
	size?: number;
	muted?: boolean;
	className?: string;
}

// Deterministic per-park variation so parks sharing a motif don't look identical.
const hash = (s: string) => [...s].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) % 997, 7);

const ParkBadge = ({motif, code, size = 64, muted = false, className}: Props): JSX.Element => {
	const uid = useId().replace(/:/g, '');
	const p = palettes[motif];
	const h = hash(code);
	const sunX = 22 + (h % 56);
	const flip = h % 2 === 0 && !['coast', 'gatewayarch', 'cave'].includes(motif);

	return (
		<svg
			viewBox='0 0 100 100'
			width={size}
			height={size}
			className={className}
			style={muted ? {filter: 'grayscale(1)', opacity: 0.45} : undefined}
			aria-hidden='true'>
			<defs>
				<clipPath id={`clip-${uid}`}><circle cx='50' cy='50' r='44'/></clipPath>
				<linearGradient id={`sky-${uid}`} x1='0' y1='0' x2='0' y2='1'>
					<stop offset='0' stopColor={p.sky[0]}/>
					<stop offset='1' stopColor={p.sky[1]}/>
				</linearGradient>
			</defs>
			<circle cx='50' cy='50' r='49' fill={p.ring}/>
			<g clipPath={`url(#clip-${uid})`}>
				<rect x='0' y='0' width='100' height='100' fill={`url(#sky-${uid})`}/>
				{motif !== 'cave' && <circle cx={sunX} cy='22' r='7' fill={motif === 'volcano' ? '#f6e7c8' : '#fff4c2'}/>}
				<g transform={flip ? 'translate(100 0) scale(-1 1)' : undefined}>{shapes[motif](p)}</g>
			</g>
			<circle cx='50' cy='50' r='44' fill='none' stroke='#ffffff' strokeWidth='1.5' opacity='0.8'/>
		</svg>
	);
};

export default ParkBadge;
