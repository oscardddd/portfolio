import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Resume() {
  const router = useRouter();

  useEffect(() => {
    // Replace this URL with the public Google Drive link
    const googleDriveURL ="https://drive.google.com/file/d/1pg5k2F8Yko7jGN-jq2eRS_-IhEGxxfhk/preview";
    router.push(googleDriveURL);
  }, [router]);

  return null; // Nothing to render as we're redirecting
}
