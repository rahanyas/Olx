import footerItem from "../elements/footer"

function Footer(){
  return (
    <div>

    
    <div className="flex justify-evenly bg-gray-200 p-4">
      {footerItem.map((element, index) => (
        <ul key={index}>
            <li className="capitalize font-mono">{element.heading}</li>
            {element.items.map((subItem, index) => (
              <li key={index}>{subItem}</li>
            ))}
        </ul>
      ))}
    </div>
    </div>
  )
};

export default Footer


