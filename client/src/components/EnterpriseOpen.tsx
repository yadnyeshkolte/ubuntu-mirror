export default function EnterpriseOpen() {
  return (
    <section className="py-16 bg-white border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-light mb-4">Modern enterprise open source</h2>
          <p className="text-xl font-light">
            Security, support, and managed services from the publisher of Ubuntu.
          </p>
          <div className="mt-8">
            <a href="#" className="bg-ubuntu-orange text-white px-6 py-3 rounded hover:bg-orange-700">
              Get Ubuntu Pro
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          <img
            src="https://assets.ubuntu.com/v1/66d21279-aws.png"
            alt="AWS"
            className="h-10 max-w-full"
          />
          <img
            src="https://assets.ubuntu.com/v1/d24afe72-azure.png"
            alt="Microsoft Azure"
            className="h-10 max-w-full"
          />
          <img
            src="https://assets.ubuntu.com/v1/79de55f4-att.png"
            alt="AT&T"
            className="h-10 max-w-full"
          />
          <img
            src="https://assets.ubuntu.com/v1/5c8b5aef-google%20cloud.png"
            alt="Google Cloud"
            className="h-8 max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
