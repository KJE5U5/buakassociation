import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function DownloadReportButton() {
  const handleDownload = () => {
    // Replace this with the actual path to your PDF in the public folder
    const fileUrl = "/BUAK_DATA_DRIVEN_INVESTOR_DECK.pdf";
    const fileName = "BUAK_DATA_DRIVEN_INVESTOR_DECK.pdf";

    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName; // triggers download instead of opening
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center mt-10">
      <Button
        variant="outline"
        size="lg"
        onClick={handleDownload}
        className="flex items-center gap-2 mx-auto border-primary text-primary hover:bg-primary hover:text-white transition-all"
      >
        <Download className="w-5 h-5" />
        Download Full Impact Report (PDF)
      </Button>
    </div>
  );
}
