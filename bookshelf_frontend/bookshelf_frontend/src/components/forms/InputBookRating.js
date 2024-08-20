import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { COLORS } from "../../utils/config";

const InputBookRating = ({ rating, onChange }) => {
  return (
    <>
      <div className="sub-title">本の評価</div>
      <div className="form__stars">
        {
          <Rating
            emptySymbol={
              <FontAwesomeIcon icon={faStar} color={COLORS.star.empty} />
            }
            fullSymbol={
              <FontAwesomeIcon icon={faStar} color={COLORS.star.full} />
            }
            value={rating}
            fractions={1} // 星をいくつに分割するか。2にしたら星の半分も評価に入る
            initialRating={rating} // デフォルトの評価数。
            onChange={onChange}
          />
        }
      </div>
    </>
  );
};

export default InputBookRating;
