import React, { memo } from "react";
import PropTypes from "prop-types";

/**
 * 로딩바 컴포넌트
 */
// --> https://mhnpd.github.io/react-loader-spinner/
import { MutatingDots } from "react-loader-spinner";

const Spinner = memo(({ loading = true, width = 100, height = 100 }) => {
  return (
    <MutatingDots
      visible={loading}
      height={width}
      width={height}
      color="#D1E9F6"
      secondaryColor="#EECAD5"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        position: "fixed",
        zIndex: 9999,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      wrapperClass="blocks-wrapper"
    />
  );
});

/** 데이터 타입 설정 */
Spinner.propTypes = {
  loading: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Spinner;
