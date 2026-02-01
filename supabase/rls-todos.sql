-- ============================================================
-- RLS(Row Level Security) 설정: todos 테이블
-- Supabase 대시보드 → SQL Editor에서 실행
-- ============================================================

-- 1. RLS 활성화 (이미 켜져 있으면 무시)
ALTER TABLE public.todos ENABLE ROW LEVEL SECURITY;

-- 2-A. [옵션] 로그인 없이 읽기만 허용 (anon 키로 조회 가능)
--     → 공개 데이터, 비로그인 사용자도 조회 가능할 때 사용
CREATE POLICY "Allow public read on todos"
  ON public.todos
  FOR SELECT
  TO anon
  USING (true);

-- anon(비로그인)이 INSERT 할 수 있게 (할 일 추가용)
CREATE POLICY "Allow public insert on todos"
  ON public.todos
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 2-B. [옵션] 로그인한 사용자만 읽기 허용 (위 2-A 대신 둘 중 하나만 사용)
--     → Supabase Auth 로그인 후에만 조회 가능
-- CREATE POLICY "Allow authenticated read on todos"
--   ON public.todos
--   FOR SELECT
--   TO authenticated
--   USING (true);

-- 2-C. [나중에] 사용자별 데이터일 때 (user_id 컬럼 추가 후)
--     → 본인 row만 조회/수정 가능
-- ALTER TABLE public.todos ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);
-- CREATE POLICY "Users can read own todos"
--   ON public.todos FOR SELECT TO authenticated
--   USING (auth.uid() = user_id);
-- CREATE POLICY "Users can insert own todos"
--   ON public.todos FOR INSERT TO authenticated
--   WITH CHECK (auth.uid() = user_id);
-- CREATE POLICY "Users can update own todos"
--   ON public.todos FOR UPDATE TO authenticated
--   USING (auth.uid() = user_id);
-- CREATE POLICY "Users can delete own todos"
--   ON public.todos FOR DELETE TO authenticated
--   USING (auth.uid() = user_id);
