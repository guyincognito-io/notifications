import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Notification({notificationData}) {

  
  return (
    <div className={classNames(notificationData.active ? "bg-snow" : "", "py-4 px-4 rounded-lg flex  text-start")}>
      <div className='min-w-max mr-3'>
        <Image
          src={notificationData.image}
          width={39}
          height={39}
          alt=""
        />
      </div>
      <div className="flex justify-between min-w-full px-8">
        <div className='text-darggreyblue text-sm font-medium'>
          <button className='text-verydarkgreyblue font-extrabold mr-1.5 hover:text-blue'>{ notificationData.name }</button>
          <span>{notificationData.notification} </span> 
          {notificationData.post && (<span className='font-bold hover:text-blue text-left cursor-pointer'>{notificationData.post}</span> )}
          {notificationData.group && (<button className='font-bold text-blue text-left'>{notificationData.group}</button> )}
          {notificationData.active && <div className="bg-red w-2.5 h-2.5 mr-4 rounded-full inline-block ml-1.5" aria-hidden="true"/>} 
          <span className='block text-greyblue'>{notificationData.when}</span>
          {notificationData.msg && (
            <button className="border-verylightgreyblue hover:bg-lightgreyblue border rounded-md p-4 mt-3 text-left">
              {notificationData.msg}
            </button>
          )}
        </div>
        { notificationData.pic && (
          <div className='min-w-max'>
            
            <Image
              src={notificationData.pic}
              width={39}
              height={39}
              alt=""
            />
            
        </div>
        )}
      </div>
    </div>
  )
}