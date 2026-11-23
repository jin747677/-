import { useMemo, useState } from 'react';
import { BookOpen, Search, X } from 'lucide-react';
import { EntryDetailView } from './components/EntryDetailView';
import { ResilientImage } from './components/ResilientImage';
import {
  BUILTIN_IMAGES,
  DEFAULT_CLASS_SETTINGS,
  DEFAULT_ENTRIES,
} from './data/defaultEntries';
import {
  SeasonalCategory,
  getEntryImages,
} from './types/encyclopedia';

type ActiveSection = 'explore' | 'chuseok' | 'dongji';

const QUICK_KEYWORDS: { label: string; category: SeasonalCategory }[] = [
  { label: '추석', category: '추석' },
  { label: '송편', category: '추석' },
  { label: '강강술래', category: '추석' },
  { label: '소싸움', category: '추석' },
  { label: '차례', category: '추석' },
  { label: '동지', category: '동지' },
  { label: '팥죽', category: '동지' },
  { label: '새알심', category: '동지' },
  { label: '동지버선', category: '동지' },
  { label: '달력', category: '동지' },
];

export default function App() {
  const entries = DEFAULT_ENTRIES;
  const settings = DEFAULT_CLASS_SETTINGS;

  const [activeSection, setActiveSection] = useState<ActiveSection>('explore');
  const [categoryFilter, setCategoryFilter] = useState<'전체' | SeasonalCategory>('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEntryId, setSelectedEntryId] = useState<string>(
    () => DEFAULT_ENTRIES[0].id
  );

  const filteredEntries = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();

    return entries.filter((entry) => {
      const matchesCategory =
        categoryFilter === '전체' || entry.category === categoryFilter;
      if (!matchesCategory) return false;

      if (!normalized) return true;

      const searchableText = [
        entry.title,
        entry.category,
        entry.timing,
        entry.topicType,
        entry.summary,
        ...entry.keywords,
        ...entry.explanation,
        entry.wisdom,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(normalized);
    });
  }, [entries, categoryFilter, searchQuery]);

  const activeEntry = useMemo(() => {
    const foundInFiltered = filteredEntries.find((e) => e.id === selectedEntryId);
    if (foundInFiltered) return foundInFiltered;
    return filteredEntries[0] ?? null;
  }, [filteredEntries, selectedEntryId]);

  const handleNavClick = (section: ActiveSection) => {
    setActiveSection(section);
    if (section === 'explore') {
      setCategoryFilter('전체');
    } else if (section === 'chuseok') {
      setCategoryFilter('추석');
      setSearchQuery('');
    } else if (section === 'dongji') {
      setCategoryFilter('동지');
      setSearchQuery('');
    }
  };

  const handleCategoryTab = (cat: '전체' | SeasonalCategory) => {
    setCategoryFilter(cat);
    if (cat === '추석') setActiveSection('chuseok');
    else if (cat === '동지') setActiveSection('dongji');
    else setActiveSection('explore');
  };

  const handleQuickKeyword = (keyword: string) => {
    setActiveSection('explore');
    setCategoryFilter('전체');
    setSearchQuery(keyword);
    const exactMatch = entries.find(
      (e) =>
        e.title.includes(keyword) ||
        e.keywords.some((k) => k.toLowerCase() === keyword.toLowerCase())
    );
    if (exactMatch) {
      setSelectedEntryId(exactMatch.id);
    }
  };

  const handleSelectEntry = (entryId: string) => {
    setSelectedEntryId(entryId);
    setActiveSection('explore');
  };

  const handleResetView = () => {
    setActiveSection('explore');
    setCategoryFilter('전체');
    setSearchQuery('');
    setSelectedEntryId(DEFAULT_ENTRIES[0].id);
  };

  return (
    <div className="relative min-h-screen flex flex-col text-slate-900">
      {/* Bright Airy Storybook Background (No yellow cast) */}
      <div className="fixed inset-0 -z-10 pointer-events-none select-none overflow-hidden bg-slate-50">
        <img
          src={BUILTIN_IMAGES.background}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-55 brightness-110 saturate-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-sky-50/45 to-white/80" />
      </div>

      {/* 3-Zone Top Navigation Bar */}
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4 sm:gap-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <button
            type="button"
            onClick={handleResetView}
            className="font-display text-lg sm:text-xl text-slate-900 whitespace-nowrap shrink-0 cursor-pointer hover:text-teal-700 transition-colors"
          >
            {settings.classTitle}
          </button>

          {/* Zone 2: Clean Single-Line Nav Links */}
          <nav
            aria-label="주요 메뉴"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            <button
              type="button"
              onClick={() => handleNavClick('explore')}
              className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                activeSection === 'explore'
                  ? 'text-teal-800 border-teal-700 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              백과 찾기
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('chuseok')}
              className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                activeSection === 'chuseok'
                  ? 'text-teal-800 border-teal-700 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              추석 이야기
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('dongji')}
              className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer border-b-2 ${
                activeSection === 'dongji'
                  ? 'text-teal-800 border-teal-700 font-semibold'
                  : 'border-transparent hover:text-slate-900'
              }`}
            >
              동지 이야기
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="shrink-0">
            <button
              type="button"
              onClick={handleResetView}
              className="px-4 py-2 min-h-[40px] text-xs sm:text-sm font-medium text-white bg-teal-700 hover:bg-teal-800 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              전체 낱말 보기
            </button>
          </div>
        </div>

        {/* Mobile Secondary Quick Nav */}
        <div className="flex md:hidden items-center gap-4 px-4 pb-2.5 overflow-x-auto text-sm font-medium text-slate-600">
          <button
            type="button"
            onClick={() => handleNavClick('explore')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 ${
              activeSection === 'explore'
                ? 'text-teal-800 border-teal-700 font-semibold'
                : 'border-transparent'
            }`}
          >
            백과 찾기
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('chuseok')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 ${
              activeSection === 'chuseok'
                ? 'text-teal-800 border-teal-700 font-semibold'
                : 'border-transparent'
            }`}
          >
            추석 이야기
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('dongji')}
            className={`whitespace-nowrap shrink-0 pb-0.5 border-b-2 ${
              activeSection === 'dongji'
                ? 'text-teal-800 border-teal-700 font-semibold'
                : 'border-transparent'
            }`}
          >
            동지 이야기
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-7 sm:py-9 space-y-7">
        {/* Guided Search Hero Section */}
        <section className="max-w-4xl mx-auto text-center space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-medium text-teal-800">
              3학년 사회 · 우리의 세시풍속
            </p>
            <h1 className="font-display text-3xl sm:text-5xl text-slate-900 text-balance leading-tight">
              궁금한 세시풍속 낱말을 찾아보세요
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              {settings.teacherMessage}
            </p>
          </div>

          {/* Search Input Box */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-2xl mx-auto"
            role="search"
            aria-label="세시풍속 낱말 검색"
          >
            <div className="relative flex items-center bg-white rounded-2xl border-2 border-slate-200 focus-within:border-teal-700 shadow-[0_8px_24px_-10px_rgba(15,23,42,0.1)] transition-colors">
              <Search
                className="w-5 h-5 text-teal-700 ml-4 shrink-0"
                aria-hidden="true"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="예: 송편, 보름달, 강강술래, 소싸움, 동지, 팥죽..."
                aria-label="검색할 낱말 입력"
                className="w-full bg-transparent px-3.5 py-3.5 min-h-[52px] text-base sm:text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="검색어 지우기"
                  className="p-2 mr-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </form>

          {/* Guided Keyword Suggestions & Filter Tabs */}
          <div className="space-y-3 pt-1">
            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs sm:text-sm text-slate-600 mr-1">
                추천 낱말:
              </span>
              {QUICK_KEYWORDS.map((item) => {
                const isActive =
                  searchQuery.trim().toLowerCase() === item.label.toLowerCase();
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => handleQuickKeyword(item.label)}
                    className={`px-3 py-1.5 min-h-[36px] rounded-xl text-xs sm:text-sm font-medium border transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-teal-700 text-white border-teal-700'
                        : 'bg-white/95 text-slate-700 border-slate-200 hover:border-teal-400 hover:bg-teal-50/70'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Segmented Category Filter */}
            <div className="flex justify-center pt-1">
              <div
                className="inline-flex items-center gap-1 p-1 bg-slate-200/75 backdrop-blur-xs rounded-xl"
                role="tablist"
                aria-label="명절과 절기 분류"
              >
                {(['전체', '추석', '동지'] as const).map((tab) => {
                  const count =
                    tab === '전체'
                      ? entries.length
                      : entries.filter((e) => e.category === tab).length;
                  return (
                    <button
                      key={tab}
                      type="button"
                      role="tab"
                      aria-selected={categoryFilter === tab}
                      onClick={() => handleCategoryTab(tab)}
                      className={`px-4 py-2 min-h-[40px] rounded-lg text-sm font-medium transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        categoryFilter === tab
                          ? 'bg-white text-slate-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {tab === '전체'
                        ? `모두 보기 (${count})`
                        : tab === '추석'
                          ? `추석 한가위 (${count})`
                          : `동지 작은설 (${count})`}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Encyclopedia Results & Open-Book Detail View */}
        {filteredEntries.length === 0 ? (
          <section className="max-w-2xl mx-auto bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200 p-8 sm:p-10 text-center space-y-4">
            <BookOpen
              className="w-10 h-10 text-teal-700/60 mx-auto"
              aria-hidden="true"
            />
            <div className="space-y-1.5">
              <h2 className="font-display text-2xl text-slate-900">
                ‘{searchQuery}’에 대한 자료를 찾지 못했어요
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                철자를 다시 확인하거나, 아래 추천 낱말을 눌러 우리반 지식백과를 살펴보세요.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setCategoryFilter('전체');
                }}
                className="px-4 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white text-sm font-medium cursor-pointer"
              >
                전체 자료 다시 보기
              </button>
            </div>
          </section>
        ) : (
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Left Column: Matching Encyclopedia Cards */}
            <aside className="lg:col-span-5 xl:col-span-4 space-y-3">
              <div className="flex items-center justify-between px-1">
                <h2 className="font-display text-lg text-slate-800">
                  찾은 자료{' '}
                  <span className="text-teal-800 tabular-nums">
                    {filteredEntries.length}
                  </span>
                  개
                </h2>
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-slate-600 hover:text-slate-900 underline cursor-pointer"
                  >
                    검색 초기화
                  </button>
                )}
              </div>

              <div className="space-y-3">
                {filteredEntries.map((item) => {
                  const isSelected = activeEntry?.id === item.id;
                  const itemImages = getEntryImages(item);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedEntryId(item.id)}
                      className={`w-full text-left rounded-2xl p-3.5 border transition-all cursor-pointer flex gap-3.5 items-center ${
                        isSelected
                          ? 'bg-white border-teal-700 ring-2 ring-teal-500/20 shadow-sm'
                          : 'bg-white/90 hover:bg-white border-slate-200 hover:border-teal-400'
                      }`}
                    >
                      <div className="w-24 aspect-[4/3] rounded-xl overflow-hidden bg-sky-50/50 shrink-0 border border-slate-200/80">
                        <ResilientImage
                          src={itemImages[0]?.url || item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 space-y-1">
                        <div className="flex items-center gap-1.5 text-xs text-teal-800 truncate">
                          <span className="font-semibold">{item.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="truncate">{item.timing}</span>
                          {itemImages.length > 1 && (
                            <>
                              <span aria-hidden="true">·</span>
                              <span className="shrink-0 tabular-nums">
                                사진 {itemImages.length}장
                              </span>
                            </>
                          )}
                        </div>
                        <h3 className="font-display text-lg text-slate-900 truncate">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-snug">
                          {item.summary}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </aside>

            {/* Right Column: Open Illustrated Encyclopedia Spread */}
            <div className="lg:col-span-7 xl:col-span-8">
              {activeEntry && (
                <EntryDetailView
                  entry={activeEntry}
                  allEntries={entries}
                  onSelectEntry={handleSelectEntry}
                  onKeywordClick={handleQuickKeyword}
                />
              )}
            </div>
          </section>
        )}
      </main>

      {/* Quiet Footer */}
      <footer className="w-full border-t border-slate-200/80 bg-white/75 py-4 px-6 mt-8">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
          <span>{settings.classTitle} · 초등학교 3학년 사회 세시풍속 탐구</span>
          <span>추석 · 동지 안내된 탐구 자료</span>
        </div>
      </footer>
    </div>
  );
}
