import "./Card.css";
const Card = (props) => {
  const classes = "card " + props.className;
  /*
    如果自定義的 Component 還有其他 Component 的話
    需要用 props.children 來把全部的資訊 render 出來
    也就是說要 render 被 <Card></Card> 包起來的所有資訊
    都在 props.children 裡面
  */
  return <div className={classes}>{props.children}</div>;
};
export default Card;
