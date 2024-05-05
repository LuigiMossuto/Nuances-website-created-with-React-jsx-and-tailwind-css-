const CheckboxL = ({text,defaultChecked,onChange}) => {
  return (
    <label className="label cursor-pointer w-28">
      <span className="label-text text-sm lg:text-base">{text}</span>
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange}
        className="checkbox [--chkbg:theme(colors.blue.600)] checkbox-xs"
      />
    </label>
  );
};

export default CheckboxL;
