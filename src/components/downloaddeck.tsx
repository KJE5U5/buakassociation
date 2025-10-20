import { Button } from "@/components/ui/button";
import { Download, AlertCircle } from "lucide-react";
import { useState } from "react";

interface DownloadInvestmentDeckProps {
    variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "accent";
    size?: "default" | "sm" | "lg" | "icon";
    className?: string;
    children?: React.ReactNode;
    onDownloadStart?: () => void;
    onDownloadSuccess?: () => void;
    onDownloadError?: (error: string) => void;
}

const DownloadInvestmentDeck = ({
    variant = "outline",
    size = "lg",
    className = "",
    children,
    onDownloadStart,
    onDownloadSuccess,
    onDownloadError
}: DownloadInvestmentDeckProps) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownload = async () => {
        try {
            setIsDownloading(true);
            onDownloadStart?.();

            // For Vite, use absolute path from public folder
            const pdfUrl = `${window.location.origin}/BUAK_DATA_DRIVEN_INVESTOR_DECK.pdf`;

            // Check if file exists
            const response = await fetch(pdfUrl, { method: 'HEAD' });

            if (!response.ok) {
                throw new Error('Investment deck file not found');
            }

            // Create a temporary anchor element to trigger download
            const link = document.createElement('a');
            link.href = pdfUrl;
            link.download = 'BUAK_DATA_DRIVEN_INVESTOR_DECK.pdf';
            link.style.display = 'none';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Track successful download
            onDownloadSuccess?.();

        } catch (error) {
            console.error('Failed to download investment deck:', error);
            onDownloadError?.(error instanceof Error ? error.message : 'Download failed');

            // Fallback: Open in new tab if download fails
            window.open(`${window.location.origin}/BUAK_DATA_DRIVEN_INVESTOR_DECK.pdf`, '_blank');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <Button
            variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-foreground"
            onClick={handleDownload}
            disabled={isDownloading}
        >
            {isDownloading ? (
                <AlertCircle className="mr-2 h-4 w-4 animate-pulse" />
            ) : (
                <Download className="mr-2 h-4 w-4" />
            )}
            {isDownloading ? "Downloading..." : (children || "Download Investment Deck")}
        </Button>
    );
};

export default DownloadInvestmentDeck;