"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  ArrowUpRight,
  Github,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { ProjectItem } from "@/data/portfolio";

interface PlaygroundMatrixProps {
  items: ProjectItem[];
}

const ITEMS_PER_PAGE = 8;

const PlaygroundMatrix: React.FC<PlaygroundMatrixProps> = ({ items }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    items.forEach((item) => {
      if (item.category) set.add(item.category.toUpperCase());
      if (item.type) set.add(item.type.toUpperCase());
    });
    return ["ALL", ...Array.from(set)].slice(0, 7); // Top categories
  }, [items]);

  // Filter items based on search and category
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      const name = (item.name || item.title || "").toLowerCase();
      const desc = (item.desc || "").toLowerCase();
      const techStr = (
        Array.isArray(item.tech) ? item.tech.join(" ") : item.tech || ""
      ).toLowerCase();
      const cat = (item.category || "").toUpperCase();
      const type = (item.type || "").toUpperCase();

      const matchesSearch =
        !searchQuery ||
        name.includes(searchQuery.toLowerCase()) ||
        desc.includes(searchQuery.toLowerCase()) ||
        techStr.includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === "ALL" ||
        cat.includes(selectedCategory) ||
        type.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [items, searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1;
  const paginatedItems = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header & Controls Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 bg-card border border-zinc-300 dark:border-zinc-800 rounded-sm">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-foreground text-background rounded-xs">
            <Terminal size={18} />
          </div>
          <div>
            <h3 className="font-mono font-bold text-base text-foreground uppercase tracking-tight">
              PLAYGROUND_MATRIX
            </h3>
            <p className="text-xs font-mono text-muted-foreground">
              {filteredItems.length} REPOSITORIES &amp; EXPERIMENTS INDEXED
            </p>
          </div>
        </div>

        {/* Search Input & Category Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          {/* Search Box */}
          <div className="relative flex-1 sm:w-64">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
            />
            <input
              type="text"
              placeholder="SEARCH_STACK_OR_TITLE..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-xs pl-9 pr-3 py-1.5 font-mono text-xs text-foreground placeholder:text-zinc-500 focus:outline-none focus:border-foreground"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            <Filter size={12} className="text-zinc-400 shrink-0 mr-1" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-2.5 py-1 font-mono text-[10px] uppercase rounded-xs transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-foreground text-background font-bold"
                    : "bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-300 dark:border-zinc-800 hover:border-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Playground Items */}
      {paginatedItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paginatedItems.map((item) => {
            const title = item.name || item.title || "Untitled";
            const techList = Array.isArray(item.tech)
              ? item.tech
              : item.tech
              ? [item.tech]
              : [];

            return (
              <div
                key={title}
                className="flex flex-col justify-between h-full p-5 bg-card border border-zinc-300 dark:border-zinc-800 rounded-sm hover-tactile group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="badge-mono">
                      {item.type || item.category || "CODE"}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {item.github && (
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-foreground transition-colors"
                          aria-label="GitHub Source"
                        >
                          <Github size={14} />
                        </a>
                      )}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-400 hover:text-foreground transition-colors"
                          aria-label="Live Demo"
                        >
                          <ArrowUpRight size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <h4 className="font-mono font-bold text-sm text-foreground mb-2 tracking-tight group-hover:text-emerald-500 transition-colors">
                    {title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4 font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 mt-auto">
                  <div className="flex flex-wrap gap-1">
                    {techList.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 text-[9px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xs"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="p-12 text-center bg-card border border-zinc-300 dark:border-zinc-800 rounded-sm font-mono text-xs text-muted-foreground">
          NO MATCHING EXPERIMENTS FOUND FOR QUERY &quot;{searchQuery}&quot;
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-4 border-t border-zinc-300 dark:border-zinc-800 font-mono text-xs">
          <div className="text-muted-foreground">
            PAGE {currentPage} OF {totalPages} ({filteredItems.length} TOTAL)
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-1.5 border border-zinc-300 dark:border-zinc-800 rounded-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-900 text-foreground"
              aria-label="Previous Page"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`w-7 h-7 flex items-center justify-center rounded-xs transition-colors ${
                    currentPage === i + 1
                      ? "bg-foreground text-background font-bold"
                      : "border border-zinc-300 dark:border-zinc-800 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-1.5 border border-zinc-300 dark:border-zinc-800 rounded-xs disabled:opacity-30 disabled:cursor-not-allowed hover:bg-zinc-100 dark:hover:bg-zinc-900 text-foreground"
              aria-label="Next Page"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlaygroundMatrix;