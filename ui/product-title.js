'use strict'

import PropTypes from 'prop-types'

import { colors, typography } from './theme'

const ProductTitle = ({ product, description }) =>
  <div className="page-title">
    <div className="page-title-product">
      <h1>franz</h1>
      <h2>
        {product}
      </h2>
    </div>

    <h3>
      {description}
    </h3>

    <style jsx>{`
      .page-title {
        margin-bottom: 25px;
        text-align: center;
        text-transform: lowercase;
      }

      .page-title-product {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      h1 {
        font-size: ${typography.f18};
        font-weight: ${typography.bold};
        vertical-align: middle;
        letter-spacing: 1px;
      }

      h1:after {
        content: '';
        border-right: 1px solid ${colors.border};
        padding-right: 10px;
        margin-right: 10px;
      }

      h2 {
        font-size: ${typography.f18};
        font-weight: ${typography.light};
        vertical-align: middle;
        letter-spacing: 1px;
      }

      h3 {
        font-size: ${typography.f14};
        font-weight: ${typography.regular};
        color: ${colors.secondary};
        margin-top: 15px;
      }
    `}</style>
  </div>

ProductTitle.propTypes = {
  product: PropTypes.string,
  description: PropTypes.string
}

export default ProductTitle
