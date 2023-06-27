import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
        <div class="border-t h-[1px]"></div>

        <div className="">

          <div className="">
          <div className="flex-shrink-0">
                <Image
                                  src="/6.png"
                                  width={100}
                                  height={50}
                                  alt="Logo"
                                />
              </div>

            <div className="col-md-12 text-center">
              <p>Copyright &copy; 2020</p>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer