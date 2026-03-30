import { useState, useRef, useEffect } from "react";
import { Search, MessageCircle, X } from "lucide-react";

const WHATSAPP_NUMBER = "27839982176";

const searchData = [
  { keywords: ["flu", "cold", "cough", "sneeze", "fever", "sinus"], title: "Cold & Flu Relief", message: "Feeling under the weather? Our pharmacists can recommend the best cold and flu remedies for your symptoms.", wa: "Hi, I have flu/cold symptoms. Can you recommend something?" },
  { keywords: ["headache", "migraine", "head"], title: "Headache & Migraine", message: "We stock a range of effective headache and migraine relief options. Let us help you find the right one.", wa: "Hi, I have a headache. What do you recommend?" },
  { keywords: ["pain", "muscle", "joint", "back", "body"], title: "Pain Relief", message: "From muscle aches to joint pain, we have solutions to help you feel better fast.", wa: "Hi, I'm experiencing pain. Can you help with pain relief options?" },
  { keywords: ["vitamin", "immune", "supplement", "zinc", "vitamin c"], title: "Vitamins & Immune Support", message: "Boost your immunity with our range of quality vitamins and supplements.", wa: "Hi, I'm looking for vitamins and immune support supplements." },
  { keywords: ["baby", "child", "infant", "kids", "nappy", "formula"], title: "Baby & Child Care", message: "We carry trusted baby and child care products. Our team can guide you to the best options.", wa: "Hi, I need baby/child care products. Can you help?" },
  { keywords: ["blood pressure", "bp", "hypertension"], title: "Blood Pressure Checks", message: "Walk in anytime for a free, quick blood pressure check — no appointment needed.", wa: "Hi, I'd like to come in for a blood pressure check." },
  { keywords: ["prescription", "script", "refill", "medication"], title: "Prescription Assistance", message: "We can help with prescription refills, medication queries, and ensuring you get the right treatment.", wa: "Hi, I need help with my prescription/medication." },
  { keywords: ["skin", "skincare", "cream", "rash", "allergy"], title: "Skincare & Allergies", message: "Our pharmacists can recommend the best skincare and allergy relief products for your needs.", wa: "Hi, I need help with a skin/allergy issue." },
];

const SmartSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof searchData>([]);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.trim().length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }
    const q = value.toLowerCase();
    const matches = searchData.filter((item) =>
      item.keywords.some((kw) => kw.includes(q) || q.includes(kw))
    );
    setResults(matches);
    setOpen(matches.length > 0);
  };

  return (
    <div ref={containerRef} className="relative mx-auto w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => results.length > 0 && setOpen(true)}
          placeholder="Search symptoms or products... e.g. flu, headache"
          className="w-full rounded-full border border-gold/40 bg-card py-3 pl-10 pr-10 text-sm shadow-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setResults([]); setOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 z-50 mt-2 rounded-lg border border-gold/30 bg-card p-2 shadow-xl animate-fade-in">
          {results.map((item) => (
            <div key={item.title} className="rounded-md p-3 hover:bg-muted/50 transition-colors">
              <h4 className="font-semibold text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{item.message}</p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.wa)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <MessageCircle size={12} /> Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SmartSearch;
