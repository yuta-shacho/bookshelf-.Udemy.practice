const InputBookComment = ({ register, errors }) => {
  return (
    <>
      <label className="sub-title" htmlFor="book-comment">
        本の感想
      </label>
      <textarea
        id="book-comment"
        placeholder="本の感想"
        {...register("comment", { required: "本の感想を入力してください。" })}
      />
      {errors.comment && (
        <div className="error-msg">{errors.comment.message}</div>
      )}
    </>
  );
};

export default InputBookComment;
