import LabelsElement from "../../../Components/Label/Labels";
import PageComponentProps from "../../PageComponentProps";
import ObjectID from "Common/Types/ObjectID";
import TechStack from "Common/Types/ServiceCatalog/TechStack";
import FormFieldSchemaType from "CommonUI/src/Components/Forms/Types/FormFieldSchemaType";
import CardModelDetail from "CommonUI/src/Components/ModelDetail/CardModelDetail";
import FieldType from "CommonUI/src/Components/Types/FieldType";
import DropdownUtil from "CommonUI/src/Utils/Dropdown";
import Navigation from "CommonUI/src/Utils/Navigation";
import Label from "Model/Models/Label";
import ServiceCatalog from "Model/Models/ServiceCatalog";
import React, { Fragment, FunctionComponent, ReactElement } from "react";
import TechStackView from "../../../Components/TechStack/TechStackView";

const StatusPageView: FunctionComponent<
  PageComponentProps
> = (): ReactElement => {
  const modelId: ObjectID = Navigation.getLastParamAsObjectID();

  return (
    <Fragment>
      {/* ServiceCatalog View  */}
      <CardModelDetail<ServiceCatalog>
        name="Service > Service Details"
        cardProps={{
          title: "Service Details",
          description: "Here are more details for this service.",
        }}
        formSteps={[
          {
            title: "Service Info",
            id: "service-info",
          },
          {
            title: "Labels",
            id: "labels",
          },
        ]}
        isEditable={true}
        formFields={[
          {
            field: {
              name: true,
            },
            title: "Name",
            stepId: "service-info",
            fieldType: FormFieldSchemaType.Text,
            required: true,
            placeholder: "Service Name",
            validation: {
              minLength: 2,
            },
          },
          {
            field: {
              description: true,
            },
            stepId: "service-info",
            title: "Description",
            fieldType: FormFieldSchemaType.LongText,
            required: true,
            placeholder: "Description",
          },
          {
            field: {
              techStack: true,
            },
            stepId: "service-info",
            title: "Tech Stack",
            description:
              "The language or framework used to build this service.",
            fieldType: FormFieldSchemaType.MultiSelectDropdown,
            required: true,
            placeholder: "Tech Stack",
            dropdownOptions:
              DropdownUtil.getDropdownOptionsFromEnum(TechStack),
          },
          {
            field: {
              labels: true,
            },
            title: "Labels ",
            stepId: "labels",
            description:
              "Team members with access to these labels will only be able to access this resource. This is optional and an advanced feature.",
            fieldType: FormFieldSchemaType.MultiSelectDropdown,
            dropdownModal: {
              type: Label,
              labelField: "name",
              valueField: "_id",
            },
            required: false,
            placeholder: "Labels",
          },
        ]}
        modelDetailProps={{
          showDetailsInNumberOfColumns: 2,
          modelType: ServiceCatalog,
          id: "model-detail-service-catalog",
          fields: [
            {
              field: {
                _id: true,
              },
              title: "Service ID",
            },
            {
              field: {
                name: true,
              },
              title: "Service Name",
            },
            {
              field: {
                techStack: true,
              },
              title: "TechStack",
              fieldType: FieldType.Element,
              getElement: (item: ServiceCatalog): ReactElement => {
                return (
                  <Fragment>
                    <TechStackView techStack={item["techStack"] || []} />
                  </Fragment>
                );
              },
            },
            {
              field: {
                labels: {
                  name: true,
                  color: true,
                },
              },
              title: "Labels",
              fieldType: FieldType.Element,
              getElement: (item: ServiceCatalog): ReactElement => {
                return <LabelsElement labels={item["labels"] || []} />;
              },
            },
            {
              field: {
                description: true,
              },
              title: "Description",
            },
          ],
          modelId: modelId,
        }}
      />
    </Fragment>
  );
};

export default StatusPageView;
