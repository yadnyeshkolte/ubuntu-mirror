export default function LocaleOptions() {
  return (
    <section className="py-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center p-4 border border-gray-200 rounded">
            <img
              src="https://assets.ubuntu.com/v1/8114528b-picto-ubuntu-orange.png"
              alt="Ubuntu"
              className="h-8 mr-4"
            />
            <div>
              <a href="#" className="text-ubuntu-orange hover:underline">
                私たちの日本のウェブサイトを試してみてください ›
              </a>
            </div>
          </div>
          <div className="flex items-center p-4 border border-gray-200 rounded">
            <img
              src="https://assets.ubuntu.com/v1/8114528b-picto-ubuntu-orange.png"
              alt="Ubuntu"
              className="h-8 mr-4"
            />
            <div>
              <a href="#" className="text-ubuntu-orange hover:underline">
                嗨！你知道我们有中文站吗？立即带我去！ ›
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
