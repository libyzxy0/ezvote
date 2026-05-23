type CandidateProps = {
  name: string;
  description: string;
  image: string;
  tags: string[];
  position: string;
}

export function Candidate({ name, description, image, tags, position }: CandidateProps) {
  return (
    <div className="bg-yellow-400 pt-2 pl-2">
      <div className="bg-yellow-50 border-2 border-black border-b-6" style={{
        marginBottom: '6px',
        marginRight: '6px',
        marginLeft: '-8px',
        marginTop: '-8px',
        transition: 'all 0.15s ease',
      }}>
        <span className="text-gray-600 text-xs bg-black text-yellow-400 px-2 py-[2px] w-fit fnt-bungee">Running for {position}</span>

        <div className="mx-2 my-2">
          <img className="bg-yellow-400 max-h-52 w-full object-contain border-black border-b-4 border-r-4" src={image} alt="Photo" />
        </div>
        <div className="my-2 mx-4">

          <h1 className="fnt-bungee text-lg">{name}</h1>
          <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
          <div className="mt-2 flex gap-2 flex-row pb-2">
            {tags.map((item, index) => (
              <span key={index} className="bg-yellow-400 border-2 rounded-tl-lg px-2 py-[3px] text-xs font-bold">{item}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}