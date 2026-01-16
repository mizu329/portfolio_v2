export const MenuClose = ({
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
        <polygon
          className="st0"
          points="512,52.535 459.467,0.002 256.002,203.462 52.538,0.002 0,52.535 203.47,256.005 0,459.465 
		52.533,511.998 256.002,308.527 459.467,511.998 512,459.475 308.536,256.005 	"
          style={{ fill: color }}
        ></polygon>
      </g>
    </svg>
  );
};
