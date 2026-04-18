const projectData = [
  {
    meta: "2025 / Brand Design",
    title: "For Rest",
    year: "2025",
    format: "Deskterior Product Brand Design / Desk Lamp and Web Cam",
    description:
      "숲에서 영감을 받은 데스크테리어 제품 브랜드 디자인입니다. 2025 레드닷 디자인 어워드 위너, 2025 스파크 디자인 어워드 파이널리스트 프로젝트이며, 아래에는 PDF 5-12페이지를 그대로 배치했습니다.",
    heroImage: "./assets/for-rest/for-rest-page-5.png",
    gallery: [
      "./assets/for-rest/for-rest-page-6.png",
      "./assets/for-rest/for-rest-page-7.png",
      "./assets/for-rest/for-rest-page-8.png",
      "./assets/for-rest/for-rest-page-9.png",
      "./assets/for-rest/for-rest-page-10.png",
      "./assets/for-rest/for-rest-page-11.png",
      "./assets/for-rest/for-rest-page-12.png",
    ],
  },
  {
    meta: "Dummy series / Announcement",
    title: "Nobis Amet Ferro",
    year: "2044",
    format: "Folded Announcement Card / Ref. R/PRT-017",
    description:
      "도시의 표면, 우편물의 형식, 접히는 구조를 모티프로 한 더미 프로젝트입니다. 실제 포트폴리오에서는 이미지 캡션과 크레딧, 링크 등을 함께 배치할 수 있습니다.",
  },
  {
    meta: "Dummy series / Card",
    title: "Cursus Nunc Vesto",
    year: "2043",
    format: "Art Card / R/CXX-500",
    description:
      "짧은 리서치와 비주얼 실험을 묶어 보여주는 카드 형식의 작업입니다. 한두 문단의 소개와 함께 제작 연도, 사용 프로그램, 협업자 정보를 넣기 좋습니다.",
  },
  {
    meta: "Dummy series / Book",
    title: "Mollis Erat Lento",
    year: "2042",
    format: "Paperback Book / Ref. R/ANV-310",
    description:
      "여러 장면을 천천히 넘기는 리듬을 상상하며 만든 샘플 북 프로젝트입니다. 모달 안은 거의 풀페이지처럼 쓰이므로 이미지 갤러리와 장문 설명도 수용할 수 있습니다.",
  },
  {
    meta: "Dummy series / Poster",
    title: "Orci Sed Nivea",
    year: "2041",
    format: "Poster Series / Ref. R/GLS-744",
    description:
      "포스터 세트 형식의 더미 콘텐츠입니다. 일련번호, 제목, 부제, 링크 등을 조합해 실제 작업물 데이터베이스처럼 확장할 수 있도록 설계했습니다.",
  },
  {
    meta: "Dummy series / Installation",
    title: "Ultrices Mira Cota",
    year: "2040",
    format: "Installation Notes / Ref. R/ZEN-923",
    description:
      "빛과 동선, 거리감에 대한 노트를 묶은 샘플 설치 기록입니다. 작업 의도와 현장 사진, 설치 환경 정보 같은 상세 데이터를 여기에 넣으면 잘 어울립니다.",
  },
  {
    meta: "Dummy series / Editorial",
    title: "Habitant Flux Mora",
    year: "2039",
    format: "Editorial Mockup / Ref. R/OPL-220",
    description:
      "편집 디자인과 가상의 인쇄 결과물을 함께 보여주는 더미 사례입니다. 텍스트의 밀도를 조금 높여도 레이아웃이 무너지지 않도록 넉넉하게 설계했습니다.",
  },
  {
    meta: "Dummy series / Research",
    title: "Pharetra Nox Meli",
    year: "2038",
    format: "Research Folder / Ref. R/VST-501",
    description:
      "리서치 폴더를 열어보는 느낌의 샘플 상세 페이지입니다. 실제로는 프로젝트 개요, 문제 정의, 시도한 과정, 결과 이미지 순으로 콘텐츠를 넣어 확장할 수 있습니다.",
  },
];

const modal = document.querySelector(".side-modal");
const modalMeta = document.getElementById("modal-meta");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalFormat = document.getElementById("modal-format");
const modalDescription = document.getElementById("modal-description");
const modalGallery = document.getElementById("modal-gallery");
const rows = document.querySelectorAll(".project-row");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const aboutButton = document.querySelector("[data-open-about]");
const hoverPreview = document.querySelector(".hover-preview");
const hoverPreviewImage = document.querySelector(".hover-preview-image");
const cursorRing = document.querySelector(".cursor-ring");
const interactiveElements = document.querySelectorAll("a, button, .project-row");
const heroTitle = document.getElementById("hero-title");

function runHeroTyping() {
  if (!heroTitle) return;

  const rawLines = heroTitle.dataset.textLines?.split("|") ?? [];
  const lineElements = heroTitle.querySelectorAll(".hero-title-line");

  if (!rawLines.length || !lineElements.length) return;

  lineElements.forEach((line) => {
    line.textContent = "";
    line.classList.remove("is-typing");
  });

  let lineIndex = 0;

  function typeLine() {
    const currentElement = lineElements[lineIndex];
    const currentText = rawLines[lineIndex] ?? "";
    let charIndex = 0;

    currentElement.classList.add("is-typing");

    function typeChar() {
      currentElement.textContent = currentText.slice(0, charIndex + 1);
      charIndex += 1;

      if (charIndex < currentText.length) {
        window.setTimeout(typeChar, 85);
        return;
      }

      currentElement.classList.remove("is-typing");
      lineIndex += 1;

      if (lineIndex < rawLines.length) {
        window.setTimeout(typeLine, 180);
      }
    }

    if (!currentText.length) {
      currentElement.classList.remove("is-typing");
      lineIndex += 1;
      if (lineIndex < rawLines.length) window.setTimeout(typeLine, 180);
      return;
    }

    window.setTimeout(typeChar, 120);
  }

  typeLine();
}

function moveCursorRing(event) {
  if (!cursorRing) return;

  cursorRing.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
}

function getPreviewImage(project) {
  return project?.gallery?.[0] || project?.heroImage || "";
}

function movePreview(event) {
  return event;
}

function showPreview(project, event) {
  if (window.innerWidth <= 900 || window.matchMedia("(hover: none)").matches) return;

  const image = getPreviewImage(project);

  if (!image) return;

  hoverPreviewImage.src = image;
  hoverPreviewImage.alt = `${project.title} preview`;
  hoverPreview.classList.add("is-visible");
  movePreview(event);
}

function hidePreview() {
  hoverPreview.classList.remove("is-visible");
  hoverPreviewImage.src = "";
  hoverPreviewImage.alt = "";
}

document.addEventListener("mousemove", (event) => {
  cursorRing?.classList.add("is-visible");
  moveCursorRing(event);
});

document.addEventListener("mouseleave", () => {
  cursorRing?.classList.remove("is-visible");
});

interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", () => {
    cursorRing?.classList.add("is-active");
  });

  element.addEventListener("mouseleave", () => {
    cursorRing?.classList.remove("is-active");
  });
});

function openModal(index) {
  const project = projectData[index];

  if (!project) return;

  modalMeta.textContent = project.meta;
  modalTitle.textContent = project.title;
  modalYear.textContent = project.year;
  modalFormat.textContent = project.format;
  modalDescription.textContent = project.description;
  modalGallery.innerHTML = "";

  if (project.gallery?.length) {
    project.gallery.forEach((image, index) => {
      const figure = document.createElement("figure");
      const img = document.createElement("img");

      img.src = image;
      img.alt = `${project.title} PDF 페이지 ${index + 5}`;
      img.loading = "lazy";
      figure.append(img);
      modalGallery.append(figure);
    });
  }

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

rows.forEach((row) => {
  const project = projectData[Number(row.dataset.project)];

  row.addEventListener("mouseenter", (event) => {
    showPreview(project, event);
  });

  row.addEventListener("mousemove", (event) => {
    movePreview(event);
  });

  row.addEventListener("mouseleave", hidePreview);

  row.addEventListener("click", () => {
    openModal(Number(row.dataset.project));
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

aboutButton?.addEventListener("click", () => {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
});

runHeroTyping();
