import { PrivacyItem } from "@/constants/privacy";
import { listStyle, nestedListStyle } from "./PrivacyModal.styles";

// PrivacyItem 리스트 렌더링 컴포넌트
export default function PrivacyItemList({ items }: { items: PrivacyItem[] }) {
  return (
    <ul className={listStyle}>
      {items.map((item) => (
        <li key={item.text}>
          {item.text}

          {item.children && (
            <ul className={nestedListStyle}>
              {item.children.map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
