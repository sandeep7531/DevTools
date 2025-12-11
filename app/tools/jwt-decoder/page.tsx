import { Metadata } from "next";
import { JWTDecoder } from "@/components/tools/JWTDecoder";

export const metadata: Metadata = {
  title: "JWT Decoder - Decode JSON Web Tokens Online",
  description: "Decode and inspect JWT tokens with payload visualization. Free JWT decoder tool.",
  keywords: ["jwt decoder", "json web token", "jwt parser", "decode jwt", "jwt validator"],
};

export default function JWTDecoderPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 dark:text-white">JWT Decoder</h1>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          Decode and inspect JWT tokens with payload visualization.
        </p>
      </div>
      <JWTDecoder />
    </div>
  );
}
