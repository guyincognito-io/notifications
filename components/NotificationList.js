
import React, {useState, useEffect} from 'react'
import Notification from './Notification'

const notificationData = [
  {
    id: 1,
    name: "Mark Webber",
    notification: "reacted to your recent post",
    post: "My first tournament today",
    active: true,
    image: "/notifications/images/avatar-mark-webber.webp",
    when: "1m ago"
  },
  {
    id: 2,
    name: "Angela Gray",
    notification: "followed you",
    active: true,
    image: "/notifications/images/avatar-angela-gray.webp",
    when: "5m ago"
  },
  {
    id: 3,
    name: "Jacob Thomposn",
    notification: "has joined your group",
    group: "Chess Club",
    active: true,
    when: "1 day ago",
    image: "/notifications/images/avatar-jacob-thompson.webp",
  },
  {
    id: 4,
    name: "Rizky Hasanuddin",
    notification: "sent you a private message",
    msg: "Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.",
    active: false,
    when: "5 days ago",
    image: "/notifications/images/avatar-rizky-hasanuddin.webp",
  },
  {
    id: 5,
    name: "Kimberly Smith",
    notification: "commented on your picture",
    active: false,
    when: "1 week ago",
    image: "/notifications/images/avatar-kimberly-smith.webp",
    pic: "/notifications/images/image-chess.webp",
  },
  {
    id: 6,
    name: "Nathan Peterson",
    notification: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    active: false,
    image: "/notifications/images/avatar-nathan-peterson.webp",
    when: "2 weeks ago"
  },
  {
    id: 7,
    name: "Anna Kim",
    notification: "left the group",
    group: "Chess Club",
    active: false,
    when: "2 weeks ago",
    image: "/notifications/images/avatar-anna-kim.webp",
  },
]



export default function NotificationList() {
  const [notificationInfo, setNotificationInfo] = useState(notificationData);

  function markAllAsRead() {
    let newList = [...notificationInfo]

    newList.forEach((item) => {
      item.active = false
    })
    console.log(newList)
    setNotificationInfo(newList)
  }


  return (
    <div className="bg-white px-4 sm:px-8 py-6 sm:mt-16">
      <div className="flex justify-between  place-items-center mb-6">
        <h3 className="inline font-extrabold text-xl">Notifications <span className="bg-blue text-white py-1 px-3 rounded-md ml-3">{notificationInfo.filter((item) => item.active).length}</span></h3>
        <button className='text-sm text-darggreyblue font-medium' onClick={markAllAsRead}>Mark all as read</button>
      </div>
      <div className="grid grid-cols-1 gap-y-2.5">
        {notificationInfo.map((item) => (
          <Notification key={item.id}
            notificationData={item}
          />
        ))

        }

      </div>
    </div>
  )
}
