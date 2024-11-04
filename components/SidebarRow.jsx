const SidebarRow = ({ Icon, title }) => {
  return (
    <div className="flex items-center p-3 cursor-pointer hover:bg-slate-200 hover:rounded-lg">
      {Icon && <Icon className="size-7" />}

      <h4 className="ml-5 font-semibold">{title}</h4>
    </div>
  );
};

export default SidebarRow;
