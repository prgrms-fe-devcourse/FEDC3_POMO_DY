import CategoryCard from '@components/home/CategoryCard';

export default function Home() {
  return (
    <main>
      <div>
        <div>같이 뽀모해요.</div>
        <input type="text" />
        <div>
          카테고리목록
          <CategoryCard />
        </div>
      </div>
      <div>
        <input type="text" />
        <ul>유저 목록</ul>
      </div>
    </main>
  );
}
