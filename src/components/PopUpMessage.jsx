import Popup from 'reactjs-popup';

const PopUpMessage = ({task, title}) => {
  return (
    <div className="bg-amber-500 flex justify-center w-1/2 text-white text-xl py-2 my-2 border border-slate-600 rounded-3xl">
      <Popup trigger=
        {<button className="hover:text-black transition cursor-pointer">
          <span>{title}</span>
        </button>}
        modal nested>
        {
          close => (
            <div className="flex flex-col items-center justify-center p-10 bg-indigo-100 border border-slate-600 rounded-3xl">
              <div className="text-3xl font-bold my-3">
                Are you sure?
              </div>

              <div className="flex flex-row justify-between grid grid-cols-2 gap-2">
                <button onClick={task} className="bg-amber-500 flex justify-center text-white text-xl py-2 my-2 px-10 border border-slate-600 rounded-3xl">
                  <span className="hover:text-black transition cursor-pointer">Yes</span>
                </button>

                <button onClick={() => close()} className="bg-amber-500 flex justify-center text-white text-xl py-2 my-2 px-10 border border-slate-600 rounded-3xl">
                <span className="hover:text-black transition cursor-pointer">No</span>
                </button>

              </div>
            </div>
          )
        }
      </Popup>
    </div>
  )
}

export default PopUpMessage