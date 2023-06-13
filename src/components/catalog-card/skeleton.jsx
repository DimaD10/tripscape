import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    rtl
    speed={4}
    width={405}
    height={240}
    viewBox="0 0 405 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="-1" rx="12" ry="12" width="405" height="240" />
  </ContentLoader>
)

export default Skeleton

