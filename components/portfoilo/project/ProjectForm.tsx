import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ProjectForm = () => {
  const [projectInfo, setProjectInfo] = useState({
    title: '',
    content: '',
    fromDate: new Date(),
    toDate: new Date(),
  });
  const router = useRouter();
  const userId = router.query?.id;

  const onChange = (e) => {
    const { name, value } = e.target;
    setProjectInfo({
      ...projectInfo,
      [name]: value,
    });
  };
  return (
    <form>
      <div>
        <input
          name="title"
          value={projectInfo.title}
          onChange={onChange}
          placeholder={'프로젝트 제목'}
        />
      </div>
      <div>
        <div>{userId}</div>
        <input
          name="content"
          value={projectInfo.content}
          onChange={onChange}
          placeholder={'상세내역'}
        />
      </div>
    </form>
  );
};

export default ProjectForm;
