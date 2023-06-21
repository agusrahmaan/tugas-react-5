import { useState } from "react";
import "./App.css";
import KoreanDrama from "./components/KoreanDrama";
import { FaPlusCircle } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { MdZoomInMap } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { TfiVideoClapper } from "react-icons/tfi";

function App() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [episode, setEpisode] = useState("");
  const [editId, setEditId] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [kdrama, setKdrama] = useState([
    {
      id: 1,
      title: "Bloodhounds",
      episode: 8,
    },
    {
      id: 2,
      title: "Twenty Five Twenty One",
      episode: 16,
    },
    {
      id: 3,
      title: "Taxi Driver",
      episode: 16,
    },
  ]);

  return (
    <>
      <header>
        <TfiVideoClapper size={30} />
        Tugas 5 & 6
      </header>
      <div className="main">
        <div>
          {kdrama.map((value, index) => {
            return (
              <KoreanDrama
                key={index}
                id={value.id}
                title={value.title}
                episode={value.episode}
              />
            );
          })}
        </div>
        <div className="tambah">
          <form>
            <h1>Tambah</h1>
            <div className="input">
              <label>
                Id:
                <input
                  type="number"
                  value={id}
                  onChange={(e) => setId(parseInt(e.target.value))}
                />
              </label>
              <label>
                Title:
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                Episode:
                <input
                  type="number"
                  value={episode}
                  onChange={(e) => setEpisode(e.target.value)}
                />
              </label>
            </div>
            <div className="btn">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setKdrama([
                    { id: id, title: title, episode: episode },
                    ...kdrama,
                  ]);
                }}
              >
                <FaPlusCircle />
                Depan
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setKdrama([
                    ...kdrama,
                    { id: id, title: title, episode: episode },
                  ]);
                }}
              >
                <FaPlusCircle />
                Belakang
              </button>
            </div>
          </form>
        </div>
        <div className="edit">
          <form>
            <h3>Edit berdasarkan ID</h3>
            <div className="input">
              <label>
                Id:
                <input
                  type="number"
                  value={editId}
                  onChange={(e) => {
                    e.preventDefault();
                    setEditId(parseInt(e.target.value));
                    if (kdrama.find((x) => x.id == e.target.value)) {
                      kdrama.map((x) => {
                        if (x.id == e.target.value) {
                          setEditTitle(x.title);
                        }
                      });
                    } else {
                      setEditTitle("");
                    }
                  }}
                />
              </label>
              <label>
                Title:
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => {
                    e.preventDefault();
                    setEditTitle(e.target.value);
                  }}
                />
              </label>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  setKdrama(
                    kdrama.map((x) =>
                      x.id === editId ? { ...x, title: editTitle } : x
                    )
                  );
                }}
              >
                {" "}
                <FiEdit />
                Edit
              </button>
              <br />
              <label>
                Episode:
                <div className="btn-zoom">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setKdrama(
                        kdrama.map((x) =>
                          x.id === editId ? { ...x, episode: x.episode + 1 } : x
                        )
                      );
                    }}
                  >
                    <MdZoomOutMap />
                    Perbesar
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setKdrama(
                        kdrama.map((x) =>
                          x.id === editId ? { ...x, episode: x.episode - 1 } : x
                        )
                      );
                    }}
                  >
                    <MdZoomInMap />
                    Perkecil
                  </button>
                </div>
              </label>
            </div>
          </form>
        </div>
        <div className="hapus">
          <h2>Hapus</h2>
          <button
            onClick={() => {
              setKdrama(kdrama.slice(1));
            }}
          >
            <AiFillDelete />
            Depan
          </button>
          <button
            onClick={() => {
              setKdrama(kdrama.slice(0, -1));
            }}
          >
            <AiFillDelete />
            Belakang
          </button>
          <button
            onClick={() => {
              setKdrama(kdrama.slice(0, 0));
            }}
          >
            <AiFillDelete />
            Semua
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
//////////////////////////////////////////////////////////////////
