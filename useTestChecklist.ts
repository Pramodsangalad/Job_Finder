"use client";

import { useState, useEffect, useCallback } from "react";

export interface ChecklistItem {
  id: string;
  label: string;
  hint: string;
  checked: boolean;
}

const STORAGE_KEY = "prp_test_checklist";

const defaultChecklist: ChecklistItem[] = [
  {
    id: "jd-validation",
    label: "JD required validation works",
    hint: "Try submitting an empty JD form on the upload page. It should show a validation error.",
    checked: false,
  },
  {
    id: "short-jd-warning",
    label: "Short JD warning shows for <200 chars",
    hint: "Enter a job description with less than 200 characters. A warning should appear.",
    checked: false,
  },
  {
    id: "skills-extraction",
    label: "Skills extraction groups correctly",
    hint: "Upload a JD and verify skills are grouped into Technical, Soft Skills, and Domain categories.",
    checked: false,
  },
  {
    id: "round-mapping",
    label: "Round mapping changes based on company + skills",
    hint: "Select different companies and skill combinations. The assessment rounds should adapt accordingly.",
    checked: false,
  },
  {
    id: "score-calculation",
    label: "Score calculation is deterministic",
    hint: "Calculate scores multiple times with the same inputs. Results should be identical.",
    checked: false,
  },
  {
    id: "skill-toggles",
    label: "Skill toggles update score live",
    hint: "Toggle skills on/off in the score page. The total score should update in real-time.",
    checked: false,
  },
  {
    id: "persist-refresh",
    label: "Changes persist after refresh",
    hint: "Make changes on any page, refresh the browser. Your data should still be there.",
    checked: false,
  },
  {
    id: "history-save-load",
    label: "History saves and loads correctly",
    hint: "Save an assessment, then navigate to History. The saved assessment should appear in the list.",
    checked: false,
  },
  {
    id: "export-buttons",
    label: "Export buttons copy the correct content",
    hint: "Click export buttons and verify the clipboard contains the expected formatted content.",
    checked: false,
  },
  {
    id: "no-console-errors",
    label: "No console errors on core pages",
    hint: "Open browser DevTools console and navigate through all pages. No red errors should appear.",
    checked: false,
  },
];

export function useTestChecklist() {
  const [checklist, setChecklist] = useState<ChecklistItem[]>(defaultChecklist);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          // Merge with default to ensure all items exist
          const merged = defaultChecklist.map((defaultItem) => {
            const storedItem = parsed.find((item: ChecklistItem) => item.id === defaultItem.id);
            return storedItem ? { ...defaultItem, checked: storedItem.checked } : defaultItem;
          });
          setChecklist(merged);
        } catch (e) {
          console.error("Failed to parse checklist from localStorage", e);
          setChecklist(defaultChecklist);
        }
      }
      setIsLoaded(true);
    }
  }, []);

  // Save to localStorage whenever checklist changes
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(checklist));
    }
  }, [checklist, isLoaded]);

  const toggleItem = useCallback((id: string) => {
    setChecklist((prev: ChecklistItem[]) =>
      prev.map((item: ChecklistItem) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  }, []);

  const resetChecklist = useCallback(() => {
    setChecklist(defaultChecklist.map((item: ChecklistItem) => ({ ...item, checked: false })));
  }, []);

  const checkedCount = checklist.filter((item: ChecklistItem) => item.checked).length;
  const totalCount = checklist.length;
  const allChecked = checkedCount === totalCount;

  return {
    checklist,
    toggleItem,
    resetChecklist,
    checkedCount,
    totalCount,
    allChecked,
    isLoaded,
  };
}
