import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Compass,
  Eye,
  EyeOff,
  HelpCircle,
} from 'lucide-react';
import {
  EncyclopediaEntry,
  getEntryImages,
} from '../types/encyclopedia';
import { ResilientImage } from './ResilientImage';

interface EntryDetailViewProps {
  entry: EncyclopediaEntry;
  allEntries: EncyclopediaEntry[];
  onSelectEntry: (entryId: string) => void;
  onKeywordClick: (keyword: string) => void;
}

export function EntryDetailView({
  entry,
  allEntries,
  onSelectEntry,
  onKeywordClick,
}: EntryDetailViewProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isWisdomRevealed, setIsWisdomRevealed] = useState(false);

  const images = getEntryImages(entry);
  const safePhotoIndex =
    images.length > 0 ? Math.min(photoIndex, images.length - 1) : 0;
  const currentImage = images[safePhotoIndex];

  useEffect(() => {
    setPhotoIndex(0);
    setIsWisdomRevealed(false);
  }, [entry.id]);

  const relatedEntries = entry.relatedIds
    .map((id) => allEntries.find((item) => item.id === id))
    .filter((item): item is EncyclopediaEntry => Boolean(item));

  const handlePrevPhoto = () => {
    if (images.length <= 1) return;
    setPhotoIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNextPhoto = () => {
    if (images.length <= 1) return;
    setPhotoIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <article className="bg-white/95 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-[0_12px_32px_-12px_rgba(15,23,42,0.08)] overflow-hidden">
      <div className="p-6 sm:p-8 space-y-7">
        {/* Top Header & Metadata */}
        <header className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <span className="font-semibold text-teal-800">{entry.category}</span>
            <span aria-hidden="true">·</span>
            <span>{entry.topicType}</span>
            <span aria-hidden="true">·</span>
            <span>{entry.timing}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl text-slate-900 text-balance leading-tight">
            {entry.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            {entry.summary}
          </p>
        </header>

        {/* Storybook Illustration Carousel (1 image at a time + Prev/Next flip buttons) */}
        <figure className="space-y-2.5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-sky-50/40">
            <ResilientImage
              src={currentImage?.url ?? ''}
              alt={currentImage?.caption || entry.title}
              fallbackTitle={entry.title}
              className="w-full h-full object-cover"
            />

            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  aria-label="이전 사진 보기"
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md border border-slate-200 flex items-center justify-center transition-transform active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-700"
                >
                  <ChevronLeft className="w-6 h-6" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  aria-label="다음 사진 보기"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-md border border-slate-200 flex items-center justify-center transition-transform active:scale-95 cursor-pointer focus-visible:outline-2 focus-visible:outline-teal-700"
                >
                  <ChevronRight className="w-6 h-6" aria-hidden="true" />
                </button>

                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-900/75 text-white text-xs font-medium tabular-nums">
                  {safePhotoIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 px-1">
            <figcaption className="text-sm text-slate-600 flex-1 min-w-0">
              {currentImage?.caption || entry.imageCaption || entry.title}
            </figcaption>

            {images.length > 1 && (
              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handlePrevPhoto}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer whitespace-nowrap"
                >
                  이전 사진
                </button>
                <div className="flex items-center gap-1.5" aria-label="사진 순서 선택">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setPhotoIndex(idx)}
                      aria-label={`${idx + 1}번째 사진 보기`}
                      aria-current={idx === safePhotoIndex ? 'true' : undefined}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === safePhotoIndex
                          ? 'w-6 bg-teal-700'
                          : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleNextPhoto}
                  className="px-2.5 py-1 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer whitespace-nowrap"
                >
                  다음 사진
                </button>
              </div>
            )}
          </div>
        </figure>

        {/* Easy 3rd-grade Explanation */}
        <section className="space-y-3" aria-labelledby="section-explain">
          <h3
            id="section-explain"
            className="font-display text-xl text-slate-900 flex items-center gap-2"
          >
            <Compass className="w-5 h-5 text-teal-700 shrink-0" aria-hidden="true" />
            <span>쉽게 알아보기</span>
          </h3>
          <div className="space-y-3 text-base sm:text-[17px] leading-[1.75] text-slate-800">
            {entry.explanation.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Click-to-Reveal Ancestral Wisdom Section */}
        <section
          className="rounded-2xl bg-sky-50/75 border border-sky-200/80 p-5 sm:p-6 space-y-3"
          aria-labelledby="wisdom-toggle-btn"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <button
              id="wisdom-toggle-btn"
              type="button"
              aria-expanded={isWisdomRevealed}
              onClick={() => setIsWisdomRevealed((prev) => !prev)}
              className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-display text-base sm:text-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
            >
              {isWisdomRevealed ? (
                <EyeOff className="w-4 h-4 shrink-0" aria-hidden="true" />
              ) : (
                <Eye className="w-4 h-4 shrink-0" aria-hidden="true" />
              )}
              <span>왜 이런 풍속이 생겼을까요?</span>
            </button>

            <span className="text-xs sm:text-sm text-slate-600">
              {isWisdomRevealed
                ? '다시 누르면 답을 숨길 수 있어요'
                : '스스로 먼저 생각해 본 뒤 버튼을 눌러 답을 확인해 보세요'}
            </span>
          </div>

          {isWisdomRevealed && (
            <div className="rounded-xl bg-white border border-sky-200/90 p-4 text-base leading-[1.7] text-slate-800">
              {entry.wisdom}
            </div>
          )}
        </section>

        {/* Guided Inquiry Prompt (for handwritten classroom reflection) */}
        <section
          className="rounded-2xl bg-emerald-50/60 border border-emerald-200/75 p-5 sm:p-6 space-y-2"
          aria-labelledby="section-inquiry"
        >
          <h3
            id="section-inquiry"
            className="font-display text-lg text-slate-900 flex items-center gap-2"
          >
            <HelpCircle className="w-5 h-5 text-emerald-700 shrink-0" aria-hidden="true" />
            <span>우리반 탐구 질문</span>
          </h3>
          <p className="text-base sm:text-[17px] font-medium text-slate-900 leading-relaxed">
            {entry.inquiryQuestion}
          </p>
          {entry.inquiryHint && (
            <p className="text-sm text-slate-600">
              생각 길잡이: {entry.inquiryHint}
            </p>
          )}
        </section>

        {/* Searchable Keywords + Related Entries */}
        <footer className="pt-2 border-t border-slate-200/80 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <span className="font-medium text-slate-700 shrink-0">관련 낱말:</span>
            {entry.keywords.slice(0, 6).map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => onKeywordClick(kw)}
                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-teal-50 text-slate-700 hover:text-teal-800 text-xs sm:text-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                {kw}
              </button>
            ))}
          </div>

          {relatedEntries.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="font-display text-base text-slate-800">
                이어서 함께 찾아볼까요?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedEntries.map((rel) => (
                  <button
                    key={rel.id}
                    type="button"
                    onClick={() => onSelectEntry(rel.id)}
                    className="flex items-center justify-between gap-3 p-3.5 rounded-2xl border border-slate-200 bg-white hover:border-teal-400 hover:bg-teal-50/40 text-left transition-colors cursor-pointer group"
                  >
                    <div className="min-w-0">
                      <div className="text-xs text-teal-800">
                        {rel.category} · {rel.topicType}
                      </div>
                      <div className="font-display text-base text-slate-900 truncate">
                        {rel.title}
                      </div>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 text-slate-400 group-hover:text-teal-700 shrink-0 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </footer>
      </div>
    </article>
  );
}
