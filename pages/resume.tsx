import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Misc: NextPage<unknown> = () => {
    const router = useRouter();

    useEffect(() => {
        // Replace this URL with the public Google Drive link
        const googleDriveURL = "https://drive.google.com/file/d/1zv7e5sc0IhnprVQf3oI6FAym-QmDi17l/view?usp=sharing";
        router.push(googleDriveURL);
    }, [router]);

    return null; // Nothing to render as we're redirecting
};

export default Misc;
