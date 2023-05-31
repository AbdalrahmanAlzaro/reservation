import { HashLink } from "react-router-hash-link";

function GallerySes() {
  return (
    <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
      <div className="-m-1 flex flex-wrap md:-m-2">
        <div className="flex w-1/2 flex-wrap">
          <div className="w-1/2 p-1 md:p-2">
            <HashLink>
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center opacity-75 hover:opacity-100"
                src="https://cdn.discordapp.com/attachments/1106603223458000987/1107073517247266846/Component_4.png"
              />
            </HashLink>
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center opacity-75 hover:opacity-100"
              src="https://cdn.discordapp.com/attachments/1106603223458000987/1107073517465378826/Component_6.png"
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center opacity-75 hover:opacity-100"
              src="https://cdn.discordapp.com/attachments/1106603223458000987/1107073518421684264/Component_1.png"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center opacity-75 hover:opacity-100"
              src="https://cdn.discordapp.com/attachments/1106603223458000987/1107073518094516396/Component_3.png"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center opacity-75 hover:opacity-100"
              src="https://cdn.discordapp.com/attachments/1106603223458000987/1107073517717041182/Component_7.png"
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg object-cover object-center opacity-75 hover:opacity-100"
              src="https://cdn.discordapp.com/attachments/1106603223458000987/1107073518761410560/Component_5.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GallerySes;
