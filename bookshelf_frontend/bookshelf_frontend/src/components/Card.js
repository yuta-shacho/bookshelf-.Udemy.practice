import { Link } from "react-router-dom";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { COLORS, EXCERPT } from "../utils/config";


const Card = ({ book }) => {
  // 概要(20文字)...20文字を超えた場合は20文字にカットした概要文とする。
  // 20文字を越えなかった場合はそのまま
  // substring(開始, 終了)...開始から終了までの文字列を返す。
  const description = book.description.length > EXCERPT.description ? book.description.substring(0, EXCERPT.description) + "..." : book.description;

  // コメント(48文字)
  const comment = book.comment.length > EXCERPT.comment ? book.comment.substring(0, EXCERPT.comment) + "..." : book.comment;

  return (
    <Link className="card" to={`/books/${book._id}`}>
      
      <h3 className="book-title">{book.title}</h3>
      
      <div className="card__rating">
        {
          <Rating
            emptySymbol={<FontAwesomeIcon icon={faStar} color={COLORS.star.empty} />} 
            fullSymbol={<FontAwesomeIcon icon={faStar} color={COLORS.star.full} />}
            fractions={1} // 星をいくつに分割するか。2にしたら星の半分も評価に入る
            initialRating={book.rating} // デフォルトの評価数。
            readonly={true} // 評価を変更できるかどうか。デフォルトはfalse
          />
        }
      </div>
      
      <div>
        <div className="sub-title">本の概要</div>
        <p className="text">{description}</p>
      </div>

      <div>
        <div className="sub-title">本の感想</div>
        <p className="text">{comment}</p>
      </div>
    </Link>
  );
};

export default Card;
