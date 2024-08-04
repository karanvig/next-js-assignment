export default function Details() {
    return (
      <div className="flex flex-col min-h-screen bg-[rgba(43,47,51,1)] p-6">

        <div className="w-full max-w-3xl">
          <div className="mb-4">
            <div className="w-full text-left py-4 px-6 text-white rounded-lg flex justify-between items-center">
              <span className="text-lg">What is Lorem Ipsum?</span>
            </div>
            <div className="px-6 pt-2 pb-4">
              <p className="text-white font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae vehicula urna.</p>
            </div>
          </div>
  
          <div className="mb-4">
            <div className="w-full text-left py-4 px-6 text-white rounded-lg flex justify-between items-center">
              <span className="text-lg">Why do we use it?</span>
            </div>
            <div className="px-6 pt-2 pb-4">
              <p className="text-white font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non risus orci.</p>
            </div>
          </div>
  
          <div className="mb-4">
            <div className="w-full text-left py-4 px-6 text-white rounded-lg flex justify-between items-center">
              <span className="text-lg">Where can I get some?</span>
            </div>
            <div className="px-6 pt-2 pb-4">
              <p className="text-white font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce facilisis nulla ut quam dignissim.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  