export default function Availability(props) {
  if (props.available) {
    return <span className="inline-block bg-green-700 px-2 py-1 mx-1 rounded-sm text-white">available</span>
  } else {
    return <span className="inline-block bg-red-700 px-2 py-1 mx-1 rounded-sm text-white">unavailable</span>
  }
  
}