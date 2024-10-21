"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="text-center space-y-4">
      <h2 className="text-4xl font-black">Algo deu errado!</h2>
      <p className="text-lg font-semibold">Procure ajuda com nosso suporte e tente novamente...</p>
    </main>
  );
}
