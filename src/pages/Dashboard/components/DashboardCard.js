import { Link } from "react-router-dom"


export const DashboardCard = () => {
  return (
    <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
    <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
        <span>Order Id: </span>
        <span>Total: $</span>
    </div>
        <div className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
            <div className="flex">
                <Link>
                    <img className="w-32 rounded" src="" alt="" />
                </Link>
                <div className="">
                    <Link>
                        <p className="text-lg ml-2 dark:text-slate-200">name</p>
                    </Link>
                    <div className="text-lg m-2 dark:text-slate-200">
                        <span>$59</span>
                    </div>
                </div>
            </div>
        </div>

</div>
  )
}
