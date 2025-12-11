"use client";

import { useState } from "react";
import { Copy, Download, Check } from "lucide-react";
import { copyToClipboard, downloadFile } from "@/lib/utils";

export function Base64Tool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleEncode = () => {
    setError("");
    if (!input) {
      setOutput("");
      return;
    }
    try {
      const encoded = btoa(input);
      setOutput(encoded);
    } catch (err) {
      setError("Error encoding: " + (err instanceof Error ? err.message : "Unknown error"));
    }
  };

  const handleDecode = () => {
    setError("");
    if (!input) {
      setOutput("");
      return;
    }
    try {
      const decoded = atob(input);
      setOutput(decoded);
    } catch (err) {
      setError("Invalid Base64 string");
    }
  };

  const handleProcess = () => {
    if (mode === "encode") {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const handleCopy = async () => {
    if (!output) return;
    try {
      await copyToClipboard(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDownload = () => {
    if (!output) return;
    downloadFile(output, `${mode}d.txt`, "text/plain");
  };

  return (
    <div className="space-y-6">
      {/* Mode Toggle */}
      <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-900 rounded-lg w-fit">
        <button
          onClick={() => { setMode("encode"); setInput(""); setOutput(""); setError(""); }}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === "encode"
              ? "bg-white dark:bg-gray-800 shadow"
              : "hover:bg-gray-200 dark:hover:bg-gray-800"
          }`}
        >
          Encode
        </button>
        <button
          onClick={() => { setMode("decode"); setInput(""); setOutput(""); setError(""); }}
          className={`px-6 py-2 rounded-lg font-medium transition-colors ${
            mode === "decode"
              ? "bg-white dark:bg-gray-800 shadow"
              : "hover:bg-gray-200 dark:hover:bg-gray-800"
          }`}
        >
          Decode
        </button>
      </div>

      {/* Input */}
      <div className="space-y-2">
        <label className="block text-sm font-medium dark:text-white">
          {mode === "encode" ? "Text to Encode" : "Base64 to Decode"}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Enter text..." : "Enter Base64 string..."}
          rows={8}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
        />
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        <button
          onClick={handleProcess}
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
        >
          {mode === "encode" ? "Encode" : "Decode"}
        </button>
        <button
          onClick={() => { setInput(""); setOutput(""); setError(""); }}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
        >
          Clear
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {/* Output */}
      {output && (
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium dark:text-white">Output</label>
            <div className="flex gap-2">
              <button
                onClick={handleCopy}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 inline mr-2 text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 inline mr-2" />
                    Copy
                  </>
                )}
              </button>
              <button
                onClick={handleDownload}
                className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
              >
                <Download className="w-4 h-4 inline mr-2" />
                Download
              </button>
            </div>
          </div>
          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900 font-mono text-sm whitespace-pre-wrap break-all">
            {output}
          </div>
        </div>
      )}

      {/* Info */}
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
        <p className="text-sm text-blue-800 dark:text-blue-400">
          <strong>Note:</strong> All processing happens in your browser. Your data is never sent to any server.
        </p>
      </div>
    </div>
  );
}
