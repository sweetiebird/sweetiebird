import { SuccessResponse } from '../utils';

class ProductController {
  static async getProduct(req, res) {
    const { productId } = req.params;
    const prodConfig = require(`${productId}/package.json`).sweetiebird;

    return SuccessResponse(res, prodConfig);
  }
}

export default ProductController;
