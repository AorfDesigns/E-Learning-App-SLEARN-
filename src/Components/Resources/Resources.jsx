import React from 'react';

const resources = [
  {
    subject: 'Advanced React',
    pdfs: [
      { title: 'React Hooks in Depth', url: '/path/to/react-hooks-in-depth.pdf' },
      { title: 'Advanced State Management', url: '/path/to/advanced-state-management.pdf' },
    ],
    videos: [
      { title: 'Understanding React Hooks', url: 'https://www.youtube.com/embed/videoid1' },
      { title: 'Advanced State Management in React', url: 'https://www.youtube.com/embed/videoid2' },
    ],
  }
];

const Resources = () => {
  return (
    <div className="container mx-auto p-4">
      {resources.map((resource, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{resource.subject}</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">PDFs</h3>
            <ul className="list-disc list-inside">
              {resource.pdfs.map((pdf, idx) => (
                <li key={idx}>
                  <a href={pdf.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    {pdf.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Videos</h3>
            <ul className="list-disc list-inside">
              {resource.videos.map((video, idx) => (
                <li key={idx}>
                  <iframe 
                    width="560" 
                    height="315" 
                    src={video.url} 
                    title={video.title} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="mb-4"
                  ></iframe>
                  <p>{video.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Resources;
