export const MenuOpen = ({
  className = "",
  size = 24,
  color = "currentColor",
}) => {
  return (
    <svg
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 512 512"
      style={{ width: `${size}px`, height: `${size}px`, opacity: 1 }}
      className={className}
      xmlSpace="preserve"
    >
      {/* 内部の<style>タグは削除して、直接 fillを指定 */}
      <g>
        <rect y="16" width="512" height="96" fill={color}></rect>
        <rect y="208" width="512" height="96" fill={color}></rect>
        <rect y="400" width="512" height="96" fill={color}></rect>
      </g>
    </svg>
  );
};
