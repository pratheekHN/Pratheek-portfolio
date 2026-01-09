import React from 'react';
import { File, Folder, Tree } from "@/components/ui/file-tree";
import { Highlighter } from "@/components/ui/highlighter";

export default function Education() {
  return (
    <section id="education" className="w-full bg-white text-black pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-block mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-pixel">
              <Highlighter action="underline" color="#FFD700">
                EDUCATION 🎓 & PROFESSIONAL EXPERIENCE
              </Highlighter>
            </h2>
          </div>
          <div className="relative flex max-w-lg mx-auto flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-4">
            <Tree
              className="w-full bg-background overflow-hidden rounded-md"
              initialExpandedItems={["Education", "KU", "MC", "BA", "BHS", "Certifications"]}
            >
              <Folder element="My Education" value="Education">
                <Folder element="Adichunchanagiri University" value="KU">
                  <File value="KU-MCA">
                    <p>Bachelor of Computer Science (2020 – 2024)</p>
                  </File>
                </Folder>
                <Folder element="ACCENTURE Internship" value="MC">
                  <File value="MC-BCA">
                    <p>SERVICE DELIVERY ASSOCIATE</p>
                  </File>
                </Folder>
                <Folder element="FULL STACK WEB DEVELOPER INTERN" value="BA">
                  <File value="BA-HS">
                    <p>SELFYPAGE DEVELOPERS PVT. LTD.</p>
                  </File>
                </Folder>
                 {/* <Folder element="Barpeta Govt. HS School" value="BHS">
                   <File value="BHS-Matric">
                    <p>Matriculation (2016)</p>
                  </File>                   
                </Folder> */}
              </Folder>
                <Folder element="My Certifications" value="Certifications">
                  <Folder element="FULL STACK WEB DEVELOPMENT" value="Cisco">
                    <File value="Cisco-Intro">
                      <p>PHYSICS WALLAH</p>
                    </File>
                  </Folder>
                  <Folder element="PYTHON WITH MACHINE LEARNING" value="IBM">
                    <File value="IBM-Python">
                      <p>GREAT LEARNING</p>
                    </File>
                  </Folder>
                  <Folder element="CYBERS SECURITY PROFESSIONAL" value="AWS">
                    <File value="AWS-Cloud">
                      <p>FUTURESKILLS PRIME</p>
                    </File>
                  </Folder>
                </Folder>
            </Tree>
          </div>
        </div>
      </div>
    </section>
  );
}