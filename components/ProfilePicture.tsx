import Image from 'next/image';

export default function ProfilePicture() {
  return (

    <div className="relative w-[300px] h-[300px] ml-[20px] rounded-full overflow-hidden"> 
    {/* relative helps position the fill, w&h set sizes, rounded-full makes circle, overflow keeps image in circle */}
      <Image
        src="/cloud.jpg" //in public folder 
        alt="A sample pfp"
        fill //make image size of container
        style={{ objectFit: 'cover' }} // keeps image aspect ratio after fill w/ crops
      />
    </div>
  );
}
