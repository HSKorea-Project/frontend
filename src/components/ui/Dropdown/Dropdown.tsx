// import { css } from "@/styled-system/css";
// import { SelectHTMLAttributes } from "react";
// import Icon from "@/components/ui/Icon/Icon";

// interface DropdownOption {
//   label: string;
//   value: string;
// }

// interface DropdownProps extends SelectHTMLAttributes<HTMLSelectElement> {
//   label?: string;
//   required?: boolean;
//   options: DropdownOption[];
//   placeholder?: string;
//   fullWidth?: boolean;
// }

// export default function Dropdown({
//   label,
//   required,
//   options,
//   placeholder = "선택해주세요",
//   fullWidth = false,
//   ...props
// }: DropdownProps) {
//   return (
//     <div
//       className={css({
//         display: "flex",
//         flexDirection: "column",
//         textAlign: "left",
//         minWidth: "120px",
//         width: fullWidth ? "100%" : "auto",
//         gap: {
//           base: "8px",
//           // md: "8px",
//         },
//       })}
//     >
//       {label && (
//         <label
//           className={css({
//             display: "flex",
//             flexDirection: "row",
//             gap: "4px",
//             fontSize: {
//               base: "12px",
//             },
//             fontWeight: "regular",
//             color: "gray.700",
//           })}
//         >
//           {label}
//           {required && (
//             <span
//               className={css({
//                 color: "green.500",
//               })}
//             >
//               *
//             </span>
//           )}
//         </label>
//       )}

//       <div
//         className={css({
//           position: "relative",
//         })}
//       >
//         <select
//           {...props}
//           className={css({
//             width: "100%",
//             maxWidth: "375px",
//             px: {
//               base: "16px",
//             },
//             py: "12px",
//             fontSize: {
//               base: "12px",
//             },
//             borderRadius: {
//               base: "8px",
//             },
//             border: "1px solid",
//             outline: "none",
//             transition: "all 0.2s",
//             bg: props.disabled ? "gray.100" : "white",
//             color: props.value ? "gray.900" : "gray.500",
//             borderColor: "gray.300",
//             appearance: "none",
//           })}
//         >
//           <option value="">{placeholder}</option>

//           {options.map((option) => (
//             <option key={option.value} value={option.value} className={css({ color: "gray.900" })}>
//               {option.label}
//             </option>
//           ))}
//         </select>

//         <div
//           className={css({
//             position: "absolute",
//             top: "50%",
//             right: "16px",
//             transform: "translateY(-50%)",
//             pointerEvents: "none",
//             color: "gray.500",
//             display: "flex",
//             alignItems: "center",
//           })}
//         >
//           <Icon name="down" />
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { css, cx } from "@/styled-system/css";
import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/Icon/Icon";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
  className?: string;
  label?: string;
  required?: boolean;
}

export default function Dropdown({
  value,
  onChange,
  options,
  placeholder = "선택해주세요",
  className,
  label,
  required,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find((o) => o.value === value);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        css({
          display: "flex",
          flexDirection: "column",
          position: "relative",
          // width: "100%",
          // width: "fit-content",
          minWidth: "120px",
          gap: {
            base: "8px",
            // md: "8px",
          },
        }),
        className
      )}
    >
      {label && (
        <label
          className={css({
            display: "flex",
            flexDirection: "row",
            gap: "4px",
            fontSize: {
              base: "12px",
            },
            fontWeight: "regular",
            color: "gray.700",
          })}
        >
          {label}
          {required && (
            <span
              className={css({
                color: "green.500",
              })}
            >
              *
            </span>
          )}
        </label>
      )}

      {/* 버튼 */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={css({
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "16px",
          py: "12px",
          border: "1px solid",
          borderColor: "gray.300",
          borderRadius: "8px",
          bg: "white",
          cursor: "pointer",
        })}
      >
        <span
          className={css({
            color: value ? "gray.900" : "gray.500",
            fontSize: "12px",
          })}
        >
          {selected ? selected.label : placeholder}
        </span>

        <Icon name="down" />
      </div>

      {/* 드롭다운 */}
      {open && (
        <ul
          className={css({
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            mt: "4px",
            bg: "white",
            border: "1px solid",
            borderColor: "gray.200",
            borderRadius: "8px",
            zIndex: 10,
            overflow: "hidden",
          })}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={css({
                px: "16px",
                py: "12px",
                fontSize: "12px",
                cursor: "pointer",

                _hover: {
                  bg: "gray.100",
                },

                bg: value === option.value ? "gray.100" : "white",
              })}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
