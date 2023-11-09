import CardContent from "../list/CardContent";
import List from "../list/list";

export default function Highlight() {
    return (
        <>

            <div className="flex-col h-full bg-white rounded-lg">
                <div className="flex justify-between font-bold text-lg py-2">
                    <span>คลิปเด่น</span>
                    <button>ดูทั้งหมด</button>
                </div>
                <div className="flex-col justify-center ">
                    <div className="flex justify-center">
                        <CardContent content={"Lorem ipsum"} />
                    </div>
                    <div className="w-full h-[120px] mt-10">
                        <span>Lorem</span>
                    </div>
                    <div className=" w-full h-[120px]">
                        <span>Lorem</span>
                    </div>

                </div>
            </div>

        </>
    )
}