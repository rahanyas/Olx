import footerItem from "../elements/footer"

function Footer(){
  return (
    <div>
    <div className="flex justify-evenly bg-gray-200 p-4">
      {footerItem.map((element, index) => (
        <ul key={index}>
            <li className="capitalize font-sans">{element.heading}</li>
            {element.items.map((subItem, index) => (
              <li key={index} className="font-thin capitalize hover:text-linkColor cursor-pointer">{subItem}</li>
            ))}
        </ul>
      ))}
    </div>
    <div className="bg-linkColor w-full h-[200px] flex justify-evenly items-center">
       <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade_tech.svg?v=1" className="h-[96px] pr-[48px]"/>
       <img src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1" alt="" className="h-[60px] w-[144px]" />
       <img src="https://statics.olx.in/external/base/img/cartrade/logo/carwale.svg?v=1
" alt=""  className="h-[60px] w-[144px]" />
       <img src="	https://statics.olx.in/external/base/img/cartrade/logo/bikewale.svg?v=1
" alt=""  className="h-[60px] w-[144px]"/>
       <img src="https://statics.olx.in/external/base/img/cartrade/logo/cartrade.svg?v=1" alt=""  className="h-[60px] w-[144px]"/>
    </div>
    </div>
  )
};

export default Footer


