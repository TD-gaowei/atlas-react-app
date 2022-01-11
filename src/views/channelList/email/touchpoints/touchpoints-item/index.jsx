import { useNavigate } from "react-router";
import { routePaths } from "@/routes/routePaths";
import Flex from "@cobalt/react-flex";
import Icon from "@cobalt/react-icon";

const TouchpointItem = () => {
  const navigate = useNavigate();

  return (
    <Flex>
      this is EmailItem component!
      <Icon
        name="arrow_back_ios"
        size="micro"
        onClick={() => {
          navigate(routePaths.email);
        }}
      />
    </Flex>
  );
};

export default TouchpointItem;
