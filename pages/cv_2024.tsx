import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Resume() {
  const router = useRouter();

  useEffect(() => {
    // Replace this URL with the public Google Drive link
    const googleDriveURL = "https://drive.google.com/file/d/1Pvh__Vo-9qkzeQD8MaZUYHAgWVqjpgo8/view?usp=sharing";
    router.push(googleDriveURL);
  }, [router]);

  return null; // Nothing to render as we're redirecting
}



