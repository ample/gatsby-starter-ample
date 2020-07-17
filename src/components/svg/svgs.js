import React from "react"

const svgs = {
  "arrow-down": (
    <svg width={11} height={8} viewBox="0 0 11 8">
      <path
        fillRule="evenodd"
        d="M9.524.724l1.262 1.263L5.393 7.38 0 1.987 1.263.724l4.13 4.131z"
      />
    </svg>
  ),
  bars: (
    <svg width={24} height={19} viewBox="0 0 448 512">
      <path d="M442 114H6a6 6 0 01-6-6V84a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6zm0 160H6a6 6 0 01-6-6v-24a6 6 0 016-6h436a6 6 0 016 6v24a6 6 0 01-6 6z" />
    </svg>
  ),
  close: (
    <svg width={24} height={24} viewBox="0 0 320 512">
      <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z" />
    </svg>
  ),
  facebook: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
    </svg>
  ),
  logo: (
    <svg viewBox="0 0 292.642 340.529">
      <g>
        <g>
          <path
            d="M183.017 315.94c-3.61-15.747 6.689-33.17 25.385-42.987 18.688-9.808 71.15-37.94 71.15-37.94l6.924 30.535c7.247 31.714-15.002 64.002-49.693 72.163-21.475 5.048-47.37 6.178-53.766-21.771zM111.27 323.753a91.566 91.566 0 005.675 16.776 157.222 157.222 0 014.916-305.155L275.019 0l17.623 76.35c-27.351-16.405-63.045-22.577-99.318-14.165-49.635 11.526-86.344 46.89-96.898 87.81a37.41 37.41 0 00-.275 17.44 38.338 38.338 0 0046 28.69c36.188-8.401 18.127-57.647 66.273-68.83 32.638-7.577 49.863 11.45 52.235 21.703l3.484 14.981-91.261 43.758a118.729 118.729 0 00-34.66 24.665c-23.498 24.543-34.659 58.132-26.953 91.351z"
            fill="#fff"
          />
        </g>
      </g>
    </svg>
  ),
  twitter: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
    </svg>
  )
}

export default svgs
