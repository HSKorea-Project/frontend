import { css } from '@/styled-system/css';

export default function Home() {
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        bg: 'primary',
        color: 'white',
      })}>
      Panda CSS 적용 완료 🚀
    </div>
  );
}
